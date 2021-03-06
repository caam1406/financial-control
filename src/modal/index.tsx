import Modal from "react-modal";
import { IModalProps } from "../interfaces/modalProps.I";
import { Container, FakeRadioBox, TransactionsType } from "./style";
import close from "../assets/close.svg";
import income from "../assets/income.svg";
import outcome from "../assets/outcome.svg";
import React from "react";
import { api } from "../services";
import { SharedState } from "../context/transactionContext";

export const ModalComponent = (props: IModalProps) => {
  const [howIsSelected, setHowIsSelected] = React.useState("deposit");
  const { transactions, setTransactions } = SharedState();
  const [form, setForm] = React.useState({
    title: "",
    typeofTransaction: "",
    category: "",
    amount: 0,
  });
  Modal.setAppElement("#root"); //Fix "Warning: react-modal: App element is not defined"
  const handleCreateTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
    const rawData = {
      title: form.title,
      type: howIsSelected,
      category: form.category,
      amount: Number(form.amount),
    };
    const trans = await api.post("/transactions", {
      ...rawData,
      createdAt: new Date(),
    });
    trans && setTransactions([...transactions, trans.data.transaction]);
    // Clear the modal
    setForm({
      title: "",
      typeofTransaction: "",
      category: "",
      amount: 0,
    });
    // Close the Modal
    props.setOpen();
  };
  return (
    <Modal
      isOpen={props.open}
      onRequestClose={props.setOpen}
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <Container onSubmit={handleCreateTransaction}>
        <button className="closeButton" onClick={props.setOpen}>
          <img src={close} alt="close" />
        </button>
        <h1>ADD TRANSACTION</h1>
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          placeholder="Value"
          type="number"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: Number(e.target.value) })}
        />
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
        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <button type="submit">CREATE</button>
      </Container>
    </Modal>
  );
};
