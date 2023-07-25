import { useState, createContext, useContext } from "react";

import { v4 as uuidv4 } from "uuid";

const TransactionContext = createContext(null);

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addNewTransactionHandler = (newTransactionTitle) => {
    setTransactions([
      ...transactions,
      {
        id: uuidv4(),
        title: newTransactionTitle,
        isChecked: false,
      },
    ]);
  };

  const toggleTransactionCheckboxHandler = (id) => {
    setTransactions((previous) =>
      previous.map((transaction) => {
        if (transaction.id === id) {
          return {
            ...transaction,
            isChecked: !transaction.isChecked,
          };
        }
        return transaction;
      })
    );
  };

  const editTransactionHandler = (id, updatedTransactionTitle) => {
    setTransactions((previous) =>
      previous.map((transaction) => {
        if (transaction.id === id) {
          return {
            ...transaction,
            title: updatedTransactionTitle,
          };
        }
        return transaction;
      })
    );
  };

  const deleteTransactionHandler = (id) => {
    setTransactions((previous) =>
      previous.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addNewTransactionHandler,
        toggleTransactionCheckboxHandler,
        editTransactionHandler,
        deleteTransactionHandler,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactionContext = () => useContext(TransactionContext);
