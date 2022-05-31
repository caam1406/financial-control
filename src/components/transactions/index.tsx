import React from "react";
import { Container } from "./styled";

export const Transactions = () => {
  React.useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
      .then((res) => res.json())
      .then((data) => console.log(data));
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
          <tr>
            <td>Desenvolvimento</td>
            <td>value</td>
            <td>category</td>
            <td>date</td>
          </tr>
          <tr>
            <td>Title</td>
            <td>value</td>
            <td>category</td>
            <td>date</td>
          </tr>
          <tr>
            <td>Title</td>
            <td>value</td>
            <td>category</td>
            <td>date</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
