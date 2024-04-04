import { Form, Button } from "react-bootstrap";
import cl from "./FormComponent.module.css";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import Product from "../../models/Product.model";
import { useAppDispatch } from "../../hooks/redux";
import { dbSlice } from "../../store/reducers/dbSlice";
import { getLocal } from "../../utils/helpers";

interface IForm {
  name: string;
  description: string;
  price: number;
  isPublished: boolean;
}

const FormComponent = () => {
  const dispatch = useAppDispatch();
  const { addProduct } = dbSlice.actions;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IForm>();

  const submit: SubmitHandler<IForm> = (data) => {
    try {
      const { name, price, description, isPublished } = data;
      const newProduct = new Product(
        name,
        price,
        description,
        isPublished,
        Date.now(),
      );
      dispatch(addProduct(newProduct));
      reset();
    } catch (e) {
      console.log(e);
    }
  };
  const error: SubmitErrorHandler<IForm> = (data) => {
    console.log(data);
  };

  const isName = (data: string) => {
    if (data.length < 5) {
      return false;
    }
    return true;
  };

  const isDescription = (data: string) => {
    if (data.length < 5) {
      return false;
    }
    return true;
  };

  return (
    <Form onSubmit={handleSubmit(submit, error)}>
      <Form.Group className="mb-2" controlId="formBasicName">
        <Form.Label>Product name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product name"
          {...register("name", { required: true, validate: isName })}
          isInvalid={errors.name ? true : false}
        />
        {errors.name && (
          <Form.Control.Feedback type="invalid">
            Name must be contained at least 5 characters
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicDescription">
        <Form.Label>Product description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product description"
          {...register("description", {
            required: true,
            validate: isDescription,
          })}
          isInvalid={errors.description ? true : false}
        />
        {errors.description && (
          <Form.Control.Feedback type="invalid">
            Description must be contained at least 5 characters
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Price"
          {...register("price", {
            required: true,
            valueAsNumber: true,
            validate: (value) => value > 0,
          })}
          isInvalid={errors.price ? true : false}
        />
        {errors.price && (
          <Form.Control.Feedback type="invalid">
            Price is a required field
          </Form.Control.Feedback>
        )}
      </Form.Group>
      <Form.Group className="mb-2" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Agree with publishing" />
      </Form.Group>
      <div className={cl.submitBtnWrapper}>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};

export default FormComponent;
