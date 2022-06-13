import { Container } from "./styled";
import { SummaryComponent } from "./component";
import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";
import { SharedState } from "../../context/transactionContext";

export const Summary = () => {
  const { transactions } = SharedState();
  const totalDeposit = transactions.reduce((acc, curr) => {
    if (curr.type === "deposit") {
      return acc + curr.amount;
    }
    return acc;
  }, 0);
  const totalWithdraw = transactions.reduce((acc, curr) => {
    if (curr.type === "withdraw") {
      return acc + curr.amount;
    }
    return acc;
  }, 0);
  return (
    <Container>
      <SummaryComponent
        title="Income"
        value={totalDeposit}
        image={income}
        alt="Income Money"
      />
      <SummaryComponent
        title="Outcome"
        value={totalWithdraw}
        image={outcome}
        alt="Outcome Money"
      />
      <SummaryComponent
        title="Total"
        value={totalDeposit - totalWithdraw}
        image={total}
        alt="Total"
        className="secundaryBackground"
      />
    </Container>
  );
};
