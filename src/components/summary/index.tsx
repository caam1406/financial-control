import { Container } from "./styled";
import income from '../../assets/income.svg';
import { ISummary } from "../../interfaces/summary.I";



export const Summary = (props: ISummary) => {
    return (
        <Container>
            <div>
                <header>
                    <p>{props.title}</p>
                    <img src={income} alt="Entradas Financeiras" />
                </header>
                <strong>R$: {props.value}</strong>
            </div>
        </Container>
    );
};