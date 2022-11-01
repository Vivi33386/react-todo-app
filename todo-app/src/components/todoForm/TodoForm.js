import "./todoForm.css";

export default function TodoForm({ id, type, value, onChange, onSubmit, btnText }) {
  return (
    <form id={`${id}-form`}onSubmit={onSubmit}>
      <div>
        <input id={`${id}-input`} type={type} value={value} onChange={onChange} required />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label className="todoForm-label" htmlFor={id}>Todo:</label>
      </div>
      <button id={`${id}-btn`} className="form-submit-btn" type="submit">{btnText==='Add'?'Yes':'No'}</button>
    </form>
  );
}
