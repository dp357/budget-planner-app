import { useState } from "react";
import { useTransactionContext } from "context/TransactionContext";

const BudgetItem = ({ itemProp }) => {
  const [editTransactionDropdown, setEditTransactionDropdown] = useState(false);
  const [updatedTransactionTitle, setUpdatedTransactionTitle] = useState("");

  const {
    toggleTransactionCheckboxHandler,
    editTransactionHandler,
    deleteTransactionHandler,
  } = useTransactionContext();

  const editTransactionChangeHandler = (event) => {
    setUpdatedTransactionTitle(event.target.value);
  };

  const editTransactionSubmitHandler = (event) => {
    event.preventDefault();

    if (updatedTransactionTitle.trim()) {
      editTransactionHandler(itemProp.id, updatedTransactionTitle);
      setUpdatedTransactionTitle("");
    } else {
      alert("Please enter a new transaction");
    }
  };

  return (
    <li>
      <input
        type="checkbox"
        value={itemProp.isCompleted}
        onChange={() => toggleTransactionCheckboxHandler(itemProp.id)}
      />

      {itemProp.title}

      <button
        onClick={() => setEditTransactionDropdown((previous) => !previous)}
      >
        Edit
      </button>

      {editTransactionDropdown && (
        <form onSubmit={editTransactionSubmitHandler}>
          <label>
            <input
              type="text"
              placeholder={itemProp.title}
              value={updatedTransactionTitle}
              onChange={editTransactionChangeHandler}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}

      <button onClick={() => deleteTransactionHandler(itemProp.id)}>
        Delete
      </button>
    </li>
  );
};

export default BudgetItem;
