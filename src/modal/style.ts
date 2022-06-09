import styled from "styled-components";
import { IFakeRadioBox } from "../interfaces/fakeRadioBox.I";

export const Container = styled.form`
  h1 {
    color: var(--color-primary);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input {
    width: 100%;
    padding: 0.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: var(--background-primary);
    font-weight: 400;
    font-size: 1rem;
    &::placeholder {
      color: var(--green-light);
    }
    & + input {
      // when you have more than one input create a space between them
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    font-weight: 600;
    width: 100%;
    padding: 0.1.5rem;
    height: 4rem;
    background: var(--green-light);
    color: var(--text-title);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    &:hover {
      filter: brightness(0.5);
    }
    transition: 0.2ms;
  }
  .closeButton {
    border: 0;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    background: transparent;
    transition: 2ms;
    &:hover {
      filter: brightness(0.5);
    }
  }
`;
export const TransactionsType = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
`;

export const FakeRadioBox = styled.button<IFakeRadioBox>`
  height: 4rem;
  font-weight: 600;
  border: 1px solid var(--green-dark);
  border-radius: 0.25rem;
  background: ${(props) => props.isActive && "var(--background-selected)"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 2ms;
  &:hover {
    border-color: var(--green-light);
    border: 2px solid;
  }

  img {
    width: 20px;
    height: 20px;
  }
  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: ${(props) =>
      props.isActive ? "var(--text-title)" : "var(--green-dark)"};
  }
`;
