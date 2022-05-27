import { Summary } from "../summary";
import { Transactions } from "../transactions";
import { Container } from "./styled";

export const Dashboard = () => {
  return (
    <>
      <Container>
        <Summary />
        <Transactions />
      </Container>
    </>
  );
};
