import BudgetInput from "app/dashboard/input/BudgetInput";
import BudgetDisplay from "app/dashboard/display/BudgetDisplay";

import { useTransactionContext } from "context/TransactionContext";

const BudgetDashboard = () => {
  const { transactions } = useTransactionContext();
  return (
    <>
      <BudgetInput />
      <BudgetDisplay />
      {console.log(transactions)}
    </>
  );
};

export default BudgetDashboard;
