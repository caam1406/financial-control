import { ISummary } from "../../interfaces/summary.I";

export const SummaryComponent = (props: ISummary) => {
  return (
    <div>
      <header>
        <p>{props.title}</p>
        <img src={props.image} alt={props.alt} />
      </header>
      <strong>R$: {props.value}</strong>
    </div>
  );
};
