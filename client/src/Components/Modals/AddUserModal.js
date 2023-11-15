import React, { useState } from "react";
import Modal from "./Modal";
import './AddUserModal.css';
import { createUser } from "../../Axios";
import usersStore from "../../StateManagment/UsersStore";

const AddUserModal = ({onClose}) => {
    const [user, setUser] = useState({});
    const setShouldUpdate = usersStore((state) => state.setShouldUpdate)
    const addUser = async () => {
        await createUser(user);
        setShouldUpdate(true);
    }

    return (
        <Modal header="Add User" onClose={onClose} id="add-user-modal" >
            <label>Name:</label>
            <input type="text" id="name" name="Name" placeholder="Enter your name" className="add-user-input" onChange={(event) => setUser({...user, [event.target.name] : event.target.value})} />
            <br></br>
            <label>Address</label>
            <input type="text" id="address" name="Address" placeholder="Enter your address" className="add-user-input" onChange={(event) => setUser({...user, [event.target.name] : event.target.value})} />
            <button className="cancel-button" onClick={onClose}>Cancel</button>
            <button className="submit-button" onClick={() => addUser()}>Submit</button>
        </Modal>
    )
}

export default AddUserModal;