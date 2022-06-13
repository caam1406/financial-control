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
                <td className={transaction.type}>
                  {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(transaction.amount)}
                </td>
                <td>{transaction.category}</td>
                <td>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(transaction.createdAt)
                  )}
                </td>
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
