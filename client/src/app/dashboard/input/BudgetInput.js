import { useState } from "react";
import { useTransactionContext } from "context/TransactionContext";

const BudgetInput = () => {
  const [newTransaction, setNewTransaction] = useState("");

  const { addNewTransactionHandler } = useTransactionContext();

  const changeHandler = (event) => {
    setNewTransaction(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (newTransaction.trim()) {
      addNewTransactionHandler(newTransaction);
      setNewTransaction("");
    } else {
      alert("Please enter a transaction item");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        <input
          type="text"
          placeholder="Add Transaction..."
          value={newTransaction}
          onChange={changeHandler}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BudgetInput;
