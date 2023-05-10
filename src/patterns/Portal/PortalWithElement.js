import React from "react";
import ReactDOM from "react-dom";
import { Modal } from "./Modal";

export function PortalWithElement() {
  const [showModal, setShowModal] = React.useState(false);
  const max = 100;
  return (
    <div className="container">
      <button onClick={() => setShowModal(true)}>
        Покажи число от 0 до {max}
      </button>
      {showModal
        ? ReactDOM.createPortal(
            <Modal onClose={() => setShowModal(false)} max={100} />,
            document.getElementById("modal")
          )
        : null}
    </div>
  );
}
