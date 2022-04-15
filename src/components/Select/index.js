import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";

function Select({
  field: {
    title,
    required,
    options,
    value,
    default: defaultValue,
    html_attr: { id },
  },
  fieldName,
}) {
  const { handleChange } = useContext(FormContext);

  return (
    <div className="field_margin">
      <label htmlFor={id} className="label_margin">
        {title}
      </label>
      <select
        id={id}
        value={value}
        required={required}
        onChange={(e) => handleChange(fieldName, e)}
      >
        {options &&
          options.length > 0 &&
          options.map((option, i) => (
            <option key={i} value={option.key} defaultValue={defaultValue}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
}

export default Select;
