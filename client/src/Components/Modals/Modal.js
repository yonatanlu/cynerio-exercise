import React from "react";
import './Modal.css'
const Modal = ({ onClose, header, children }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content">
                <span className="close" onClick={onClose}></span>
                {header && <div className="modal-header">{header}</div>}
                {children && <div className="modal-body">
                    {children}
                </div>}
            </div>
        </div>
    )
}

export default Modal;