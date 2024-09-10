import "./Modal.css";

const Modal = ({
  isOpen,
  onClose,
  handleSave,
  handleChange,
  title,
  value,
  checked,
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <h2>{title}</h2>
      <form onSubmit={handleSave}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={value.title}
            onChange={handleChange}
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={value.author}
            onChange={handleChange}
          />
        </label>
        <label>
          ISBN:
          <input
            type="text"
            name="isbn"
            value={value.isbn}
            onChange={handleChange}
          />
        </label>
        <label>
          Is Borrowed:
          <input
            type="checkbox"
            name="isBorrowed"
            checked={checked}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Modal;
