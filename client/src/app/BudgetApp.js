import { TransactionProvider } from "context/TransactionContext";

import BudgetDashboard from "app/dashboard/BudgetDashboard";

const BudgetApp = () => {
  return (
    <TransactionProvider>
      <h1>Budget Planner App</h1>
      <BudgetDashboard />
    </TransactionProvider>
  );
};

export default BudgetApp;
