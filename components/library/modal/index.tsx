import React, { useEffect, useRef } from "react";
import ShowOnViewport from "../animations/showOnViewport";
import { AiOutlineClose } from "react-icons/ai";
const styles = require("./modal.module.scss");

type ModalProps = {
  isVisible: boolean;
  content: React.ReactElement;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isVisible, content, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isVisible && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isVisible, modalRef]);

  return (
    <>
      {isVisible && (
        <div
          className={styles.modalContainer}
          ref={modalRef}
          tabIndex={-1}
          onClick={onClose}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              onClose();
            }
          }}
        >
          <ShowOnViewport customClass={styles.modalContent}>
            <>
              <div className={styles.closeContainer}>
                <AiOutlineClose
                  className={styles.closeIcon}
                  onClick={onClose}
                />
              </div>
              {content}
            </>
          </ShowOnViewport>
        </div>
      )}
    </>
  );
};

export default Modal;
