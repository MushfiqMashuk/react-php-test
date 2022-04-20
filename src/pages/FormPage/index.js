import axios from "axios";
import { useEffect, useState } from "react";
import Form from "../../components/Form";
import InputElement from "../../components/InputElement";
import { FormContext } from "../../context/FormContext";

function FormPage() {
  const [formFields, setFormFields] = useState([]);

  useEffect(() => {
    const getForm = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_GET_FORM);
        const formData = response?.data;
        console.log(formData.data);
        console.log(Object.entries(formData.data.fields[0]));
        setFormFields(Object.entries(formData.data.fields[0]));
      } catch (err) {
        console.log(err);
      }
    };

    getForm();
  }, []);

  const handleChange = (fieldName, event) => {
    const targetElement = event.target;

    const newFields = [...formFields];
    newFields.forEach((field) => {
      if (fieldName === field[0]) {
        field[1].value = targetElement.value;
      }
    });

    setFormFields(newFields);
  };

  return (
    <div>
      <FormContext.Provider value={{ handleChange }}>
        <Form>
          <h3>Form</h3>
          {formFields.map((field, index) => (
            <InputElement key={index} field={field[1]} fieldName={field[0]} />
          ))}
        </Form>
      </FormContext.Provider>
    </div>
  );
}

export default FormPage;
