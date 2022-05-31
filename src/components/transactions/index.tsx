import React from "react";
import { api } from "../../services";
import { Container } from "./styled";

export const Transactions = () => {
  React.useEffect(() => {
    api.get("transactions").then((res) => console.log(res.data));
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
