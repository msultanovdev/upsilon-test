import { Form, Button } from "react-bootstrap";
import cl from "./FormPage.module.css";

const FormPage = () => {
  return (
    <div className={cl.formContainer}>
      <Form>
        <Form.Group className="mb-2" controlId="formBasicName">
          <Form.Label>Product name</Form.Label>
          <Form.Control type="text" placeholder="Enter product name" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicDescription">
          <Form.Label>Product description</Form.Label>
          <Form.Control type="text" placeholder="Enter product description" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="numeric" placeholder="Price" />
        </Form.Group>
        <Form.Group className="mb-2" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Опубликовать" />
        </Form.Group>
        <div className={cl.submitBtnWrapper}>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormPage;
