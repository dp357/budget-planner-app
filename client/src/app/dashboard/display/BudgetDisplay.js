import { useTransactionContext } from "context/TransactionContext";

import BudgetItem from "app/dashboard/display/item/BudgetItem";

const BudgetDisplay = () => {
  const { transactions } = useTransactionContext();

  return (
    <div>
      <h2>Transaction Display</h2>
      <ul>
        {transactions.map((transaction) => {
          return <BudgetItem key={transaction.id} itemProp={transaction} />;
        })}
      </ul>
    </div>
  );
};

export default BudgetDisplay;
