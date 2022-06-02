import Modal from "react-modal";
import { IModalProps } from "../interfaces/modalProps.I";
import { Container } from "./style";
import close from "../assets/close.svg";

export const ModalComponent = (props: IModalProps) => {
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
        <input placeholder="Category" />
        <button type="submit">CREATE</button>
      </Container>
    </Modal>
  );
};
