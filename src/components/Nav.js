import React from "react";
import { useModal } from "react-hooks-use-modal";
import Profile from "./Profile";
const Nav = () => {
  const [Modal, open, close] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: false,
  });
  return (
    <div className="bg-yellow-100">
      <button onClick={open}>Profile</button>

      <Modal>
       
        <Profile close={close} />
      </Modal>
    </div>
  );
};

export default Nav;
