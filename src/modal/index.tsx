import Modal from "react-modal";
import { IModalProps } from "../interfaces/modalProps.I";

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
      //style={customStyles}
      contentLabel="Example Modal"
    >
      {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
      <button onClick={props.setOpen}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </Modal>
  );
};
