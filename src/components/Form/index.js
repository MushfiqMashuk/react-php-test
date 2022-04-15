import "./form.scss";

function Form({ children }) {
  return (
    <div className="formContainer">
      <form action="#">
        {children}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
