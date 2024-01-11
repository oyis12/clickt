// CustomModal.js

import React from "react";

const CustomModal = ({ isOpen, closeModal, children }) => {
  return (
    <div className={`custom-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
