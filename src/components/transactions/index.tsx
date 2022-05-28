import { Container } from "./styled";

export const Transactions = () => {
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
