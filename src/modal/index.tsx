import Modal from "react-modal";
import { IModalProps } from "../interfaces/modalProps.I";
import { Container, FakeRadioBox, TransactionsType } from "./style";
import close from "../assets/close.svg";
import income from "../assets/income.svg";
import outcome from "../assets/outcome.svg";
import React from "react";

export const ModalComponent = (props: IModalProps) => {
  const [howIsSelected, setHowIsSelected] = React.useState("deposit");
  function afterOpenModal() {}
  Modal.setAppElement("#root"); //Fix "Warning: react-modal: App element is not defined"
  return (
    <Modal
      isOpen={props.open}
      onAfterOpen={afterOpenModal}
      onRequestClose={props.setOpen}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <Container>
        <button className="closeButton" onClick={props.setOpen}>
          <img src={close} alt="close" />
        </button>
        <h1>ADD TRANSACTION</h1>
        <input placeholder="Title" />
        <input placeholder="Value" type="number" />
        <TransactionsType>
          <FakeRadioBox
            type="button"
            onClick={() => setHowIsSelected("deposit")}
            isActive={howIsSelected === "deposit"}
          >
            <img src={income} alt="Set Value as Deposit Type" />
            <span>Deposit</span>
          </FakeRadioBox>
          <FakeRadioBox
            type="button"
            onClick={() => setHowIsSelected("withdraw")}
            isActive={howIsSelected === "withdraw"}
          >
            <img src={outcome} alt="Set Value as withdraw Type" />
            <span>withdraw</span>
          </FakeRadioBox>
        </TransactionsType>
        <input placeholder="Category" />
        <button type="submit">CREATE</button>
      </Container>
    </Modal>
  );
};
