import { ISummary } from "../../interfaces/summary.I";

export const SummaryComponent = (props: ISummary) => {
  return (
    <div className={props.className}>
      <header>
        <p>{props.title}</p>
        <img src={props.image} alt={props.alt} />
      </header>
      <strong>
        {props.title === "Income" ? "R$" : "-R$"}
        {` `}
        {props.value}
      </strong>
    </div>
  );
};
// {props.value}
