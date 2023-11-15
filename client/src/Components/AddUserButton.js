import React, { useState } from "react";
import './AddUserButton.css';
import AddUserModal from "./Modals/AddUserModal";

const AddUserButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <>
            {isModalOpen && <AddUserModal onClose={() => setIsModalOpen(false)} />}
            <button type="button" className="add-user-button" onClick={() => setIsModalOpen(true)}>
                Add User
            </button>
        </>

    )
}

export default AddUserButton;