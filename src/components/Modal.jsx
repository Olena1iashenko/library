import s from "./Modal.module.css";

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
    <div className={s.modalOverlay}>
      <div className={s.modalContent}>
        <h2>{title}</h2>
        <form onSubmit={handleSave}>
          <label
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              marginBottom: "10px",
              justifyContent: "space-between",
            }}
          >
            Title:
            <input
              type="text"
              name="title"
              value={value.title}
              onChange={handleChange}
            />
          </label>
          <label
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              marginBottom: "10px",
              justifyContent: "space-between",
            }}
          >
            Author:
            <input
              type="text"
              name="author"
              value={value.author}
              onChange={handleChange}
            />
          </label>
          <label
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              justifyContent: "space-between",
            }}
          >
            ISBN:
            <input
              type="text"
              name="isbn"
              value={value.isbn}
              onChange={handleChange}
            />
          </label>
          <div
            style={{
              marginBottom: "10px",
              color: "red",
              fontSize: "10px",
              fontStyle: "italic",
            }}
          >
            * ISBN must be in format: "123-1-12345-123-1"
          </div>
          <label
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              marginBottom: "10px",
              justifyContent: "space-between",
            }}
          >
            Is Borrowed:
            <input
              type="checkbox"
              name="isBorrowed"
              checked={checked}
              onChange={handleChange}
            />
          </label>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              marginBottom: "10px",
              justifyContent: "space-between",
            }}
          >
            <button type="submit">Save</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
