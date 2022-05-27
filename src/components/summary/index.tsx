import { Container } from "./styled";
import { SummaryComponent } from "./component";
import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";

export const Summary = () => {
  return (
    <Container>
      <SummaryComponent
        title="Income"
        value={1000.0}
        image={income}
        alt="Income Money"
      />
      <SummaryComponent
        title="Outcome"
        value={500.0}
        image={outcome}
        alt="Outcome Money"
      />
      <SummaryComponent
        title="Total"
        value={500.0}
        image={total}
        alt="Total"
        className="secundaryBackground"
      />
    </Container>
  );
};
