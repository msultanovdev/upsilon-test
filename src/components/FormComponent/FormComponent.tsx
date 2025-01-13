import { Form, Button } from "react-bootstrap";
import cl from "./FormComponent.module.css";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import Product from "../../models/Product.model";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { dbSlice } from "../../store/reducers/dbSlice";
import { setLocal } from "../../utils/helpers";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface IForm {
  name: string;
  description: string;
  price: number;
  isPublished: boolean;
}

const FormComponent = ({ id }: { id?: string }) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.dbReducer.products);
  const { addProduct, updateProducts, removeProductById } = dbSlice.actions;
  const selectedProduct = products.find((product) => product.id === id);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      name: selectedProduct?.name ?? "",
      description: selectedProduct?.description ?? "",
      price: selectedProduct?.price ?? undefined,
      isPublished: selectedProduct?.published ?? false,
    },
  });

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
      setLocal("tabKey", "list");
      toast.success("Created!", { autoClose: 2000 });
      navigate("/products");
    } catch (e) {
      console.log(e);
    }
  };

  const remove = () => {
    try {
      dispatch(removeProductById(id));
      toast.success("Removed!", { autoClose: 2000 });
      navigate("/products");
    } catch (e) {
      console.log(e);
    }
  };

  const update = () => {
    try {
      const { name, price, description, isPublished } = getValues();
      const updatedProduct = {
        ...selectedProduct,
        name,
        price,
        description,
        isPublished,
      };
      const updatedProdutcs = products.map((product) => {
        if (product.id === id) {
          return updatedProduct;
        }
        return product;
      });
      setLocal("products", JSON.stringify(updatedProdutcs));
      dispatch(updateProducts(updatedProdutcs));
      toast.success("Updated!", { autoClose: 2000 });
      navigate("/products");
    } catch (e) {
      console.log(e);
    }
  };

  const error: SubmitErrorHandler<IForm> = (data) => {
    toast.error("Some fields were not validated", { autoClose: 2000 });
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
        <Form.Check
          type="checkbox"
          label="Agree with publishing"
          {...register("isPublished")}
        />
      </Form.Group>
      <div className={cl.submitBtnWrapper}>
        {!id ? (
          <Button variant="primary" type="submit">
            Submit
          </Button>
        ) : (
          <>
            <Button
              style={{ marginRight: "5px" }}
              onClick={remove}
              variant="outline-danger"
            >
              Remove
            </Button>
            <Button onClick={update} variant="success">
              Update
            </Button>
          </>
        )}
      </div>
    </Form>
  );
};

export default FormComponent;
