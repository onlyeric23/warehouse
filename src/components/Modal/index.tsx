import React, { FunctionComponent, useEffect, useState } from "react";
import classNames from "classnames";

import "./styles.scss";

const Modal: FunctionComponent<{ onClose: () => void }> = ({
  onClose,
  children
}) => {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);
    if (onClose) {
      setTimeout(onClose, 200);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className={classNames("modal", { closing })} onClick={handleClose}>
      <div
        className="modal-content"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
