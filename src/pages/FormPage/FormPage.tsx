import { Form, Button } from "react-bootstrap";
import cl from "./FormPage.module.css";
import FormComponent from "../../components/FormComponent/FormComponent";

const FormPage = () => {
  return (
    <div className={cl.formContainer}>
      <FormComponent />
    </div>
  );
};

export default FormPage;
