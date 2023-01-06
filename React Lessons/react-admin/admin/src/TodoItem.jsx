import { useState } from "react";
import { FaTrash } from "react-icons/fa";
const styles = {
  check: {
    marginRight: 15,
  },
  editingInput: {
    width: "100%",
    padding: "5px 20px",
    border: "1px solid #ddd",
  },
  trashIcon: {
    fontSize: "16px",
    border: 0,
    boxShadow: "none",
    borderRadius: "100px",
    background: "#f1f3f4",
    outline: "none",
    width: "50px",
    height: "50px",
  },
};

export default function TodoItem({ todo, index, handleCheck, removeByIndex }) {
  let clicks = 0;
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(todo.value);

  const handleTextClick = () => {
    if (!editing) {
      clicks++;
      if (clicks === 2) {
        setEditing(true);
      }
    }
  };

  if (editing)
    return (
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setEditing(false);
            clicks = 0;
          }
        }}
        style={styles.editingInput}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    );

  return (
    <>
      <div>
        <input
          type="checkbox"
          style={styles.check}
          checked={todo.checked}
          onChange={() => {
            handleCheck(index);
          }}
        />
        <span
          onClick={handleTextClick}
          style={{
            textDecoration: todo.checked ? "line-through" : "",
          }}
        >
          {value}
        </span>
      </div>
      <div
        onClick={() => {
          removeByIndex(index);
        }}
      >
        <button type="submit" style={styles.trashIcon}>
          <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
        </button>
      </div>
    </>
  );
}
