import Email from "../Email";
import Input from "../Input";
import Radio from "../Radio";
import Select from "../Select";
import TextArea from "../TextArea";

function InputElement({ field, fieldName }) {
  switch (field.type) {
    case "text":
      return <Input field={field} fieldName={fieldName} />;
    case "radio":
      return <Radio field={field} fieldName={fieldName} />;
    case "textarea":
      return <TextArea field={field} fieldName={fieldName} />;
    case "select":
      return <Select field={field} fieldName={fieldName} />;
    case "email":
      return <Email field={field} fieldName={fieldName} />;

    default:
      return null;
  }
}

export default InputElement;
