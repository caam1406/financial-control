import React from "react";
import { ITransactionsContext } from "../interfaces/transactionsContext.I";
import { api } from "../services";

const TransactionContext = React.createContext<ITransactionsContext>({
  transactions: [],
  setTransactions: () => void 0,
});

export const UseSharedTransaction = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [transactions, setTransactions] = React.useState([]);
  React.useEffect(() => {
    api
      .get("transactions")
      .then((res) => setTransactions(res.data.transactions));
  }, []);
  return (
    <TransactionContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const SharedState = () => {
  const context = React.useContext(TransactionContext);
  !context && console.error("Context is not defined");
  const { transactions, setTransactions } = context;
  return { transactions, setTransactions };
};
