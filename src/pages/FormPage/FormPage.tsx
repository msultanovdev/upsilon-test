import cl from "./FormPage.module.css";
import FormComponent from "../../components/FormComponent/FormComponent";
import { useParams } from "react-router-dom";

const FormPage = () => {
  const { id } = useParams();

  return (
    <div className={cl.formContainer}>
      <FormComponent id={id} />
    </div>
  );
};

export default FormPage;
