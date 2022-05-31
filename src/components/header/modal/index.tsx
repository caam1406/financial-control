import React from "react";
import Modal from "react-modal";
import { IModal } from "../../../interfaces/modal.I";

export const ModalComponent = (props: IModal) => {
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //  subtitle.style.color = "#f00";
  }
  React.useEffect(() => {
    Modal.setAppElement("body"); //Fix "Warning: react-modal: App element is not defined"
  }, []);
  return (
    <Modal
      isOpen={props.open}
      onAfterOpen={afterOpenModal}
      //onRequestClose={handleCloseModal}
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
