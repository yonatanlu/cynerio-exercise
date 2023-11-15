import React from "react";
import Modal from "./Modal";

const DeleteUserModal = ({ userId, onClose, onSubmit }) => {
    return (
        <Modal onClose={onClose} header="Delete User">
            <h4>Are you sure you want to delete the user?</h4>
            <button className="cancel-button" onClick={onClose}>Cancel</button>
            <button className="submit-button" onClick={() => onSubmit(userId)}>Submit</button>
        </Modal>
    );
}

export default DeleteUserModal;