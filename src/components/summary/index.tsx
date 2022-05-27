import { Container } from "./styled";
import { ISummary } from "../../interfaces/summary.I";



export const Summary = (props: ISummary) => {
    return (
        <Container>
            <div>
                <header>
                    <p>{props.title}</p>
                    <img src={props.image} alt={props.alt} />
                </header>
                <strong>R$: {props.value}</strong>
            </div>
        </Container>
    );
};