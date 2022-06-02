import Modal from "react-modal";
import { IModalProps } from "../interfaces/modalProps.I";
import { Container } from "./style";

export const ModalComponent = (props: IModalProps) => {
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //  subtitle.style.color = "#f00";
  }
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
        {/* <button onClick={props.setOpen}>close</button> */}
        <h1>Add Value</h1>
        <input placeholder="Title" />
        <input placeholder="Value" type="number" />
        <input placeholder="Category" />
        <button type="submit">Add</button>
      </Container>
    </Modal>
  );
};
