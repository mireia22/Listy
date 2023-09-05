import ReactDOM from "react-dom";
import { ModalPopOver, ModalContent } from "./Modal-styles";

const Modal = ({ open, children }) => {
  return (
    <>
      {open
        ? ReactDOM.createPortal(
            <ModalPopOver>
              <ModalContent> {children}</ModalContent>
            </ModalPopOver>,
            document.getElementById("portal")
          )
        : null}
    </>
  );
};

export default Modal;
