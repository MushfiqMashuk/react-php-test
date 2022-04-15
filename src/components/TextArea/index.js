import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import "./textArea.scss";

function TextArea({
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
    <div className="textArea_container field_margin">
      <label className="label_margin" htmlFor={id}>
        {title}
      </label>
      <textarea
        value={value}
        id={id}
        required={required}
        rows="7"
        cols="40"
        onChange={(e) => handleChange(fieldName, e)}
      ></textarea>
    </div>
  );
}

export default TextArea;
