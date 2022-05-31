import React from "react";
import logo from "../../assets/logo.svg";
import { ModalComponent } from "../../modal";
import { Container, Content } from "./styled";

export const Header = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsOpen(!modalIsOpen);
  };
  return (
    <Container>
      <Content>
        <img src={logo} alt="Financial Control Logo" />
        <button type="button" onClick={handleOpenModal}>
          Nova Transação
        </button>
      </Content>
      <ModalComponent open={modalIsOpen} setOpen={handleOpenModal} />
    </Container>
  );
};
