import React from "react";
import { ITransactionContent } from "../../interfaces/transactionContent.I";
import { api } from "../../services";
import { Container } from "./styled";

export const Transactions = () => {
  const [transactions, setTransactions] = React.useState<ITransactionContent[]>(
    []
  );
  React.useEffect(() => {
    api
      .get("transactions")
      .then((res) => setTransactions(res.data.transactions));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={transaction.type}>{transaction.type}</td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

// {
//   transaction.amount;
// }
