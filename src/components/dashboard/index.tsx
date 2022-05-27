import { Summary } from "../summary";
import { Container } from "./styled";
import income from "../../assets/income.svg";
import outcome from "../../assets/outcome.svg";
import total from "../../assets/total.svg";

export const Dashboard = () => {
    return(
    <>
    <Container>
        <Summary title="Income" value={1000.00} image={income} alt="Income Money" />
        <Summary title="Outcome" value={500.00} image={outcome} alt="Outcome Money" />
        <Summary title="Total" value={500.00} image={total} alt="Total" />
    </Container>
    </>
    );

};