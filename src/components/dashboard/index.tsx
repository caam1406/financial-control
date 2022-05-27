import { Summary } from "../summary";
import { Container } from "./styled";

export const Dashboard = () => {
    return(
    <>
    <Container>
        <Summary title="Entradas" value={1000.00} />
    </Container>
    </>
    );

};