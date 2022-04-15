import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";

function Email({
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
    <div className="email_container field_margin">
      <label className="label_margin" htmlFor={id}>
        {title}
      </label>
      <input
        id={id}
        value={value}
        type="email"
        required={required}
        onChange={(e) => handleChange(fieldName, e)}
      />
    </div>
  );
}

export default Email;
