import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import "./input.scss";

function Input({
  field: {
    title,
    required,
    value,
    html_attr: { id },
  },
  fieldName,
}) {
  const { handleChange } = useContext(FormContext);

  return (
    <div className="input_container field_margin">
      <label className="label_margin" htmlFor={id}>
        {title}
      </label>
      <input
        value={value}
        id={id}
        type="text"
        required={required}
        onChange={(e) => handleChange(fieldName, e)}
      />
    </div>
  );
}

export default Input;
