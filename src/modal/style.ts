import styled from "styled-components";

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
