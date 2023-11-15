import React, { useEffect, useState } from "react";
import useUsersStore from "../../StateManagment/UsersStore";
import TrashCanIcon from '../../icons/trash-can-solid.svg';
import './UsersTable.css';
import DeleteUserModal from "../Modals/DeleteUserModal";
import { deleteUser as deleteUserApi, getUsers } from '../../Axios'

const UsersTable = ({ includeDelete, index, includeSearch }) => {
    const [isModalOpen, setModalIsOpen] = useState(false);
    const [userForDeletion, setUserForDeletion] = useState(-1);
    const [filteredUsers, setFilteredUsers] = useState([])

    const { users, textSearch, selectedColumns, setShouldUpdate, shouldUpdate } = useUsersStore((state) => {
        return { users : state.users, textSearch : state.textSearch, selectedColumns : state.selectedColumns, setShouldUpdate : state.setShouldUpdate, shouldUpdate : state.shouldUpdate }
    })

    const allColumns = [{"name" : "date", "value" : "Date"},
        {"name" : "name", "value" : "Name"},
        {"name" : "address", "value" : "Address"}]
    const columnsForDisplay = selectedColumns[index].length ? allColumns.filter((column) => selectedColumns[index].includes(column.name)) : allColumns;
    let usersForDisplay = (includeSearch) ? filteredUsers : users;

    useEffect(() => {
        const fetchUsers = async () => {
            const f = (await getUsers(textSearch))?.users
            setFilteredUsers(f);
        }

        if (includeSearch)
            fetchUsers();
    }, [includeSearch, textSearch, shouldUpdate]);

    const deleteUser = (userId) => {
        setUserForDeletion(userId);
        setModalIsOpen(true);
    }

    const submitDeletion = async (userId) => {
        await deleteUserApi(userId);
        setShouldUpdate(true);
        setModalIsOpen(false);
    }

    return (
        <>
        {isModalOpen && <DeleteUserModal userId={userForDeletion} onClose={() => setModalIsOpen(false)} onSubmit={submitDeletion} /> }
            <table className="users-table">
                <thead>
                <tr>
                    {columnsForDisplay.map((column) => {
                        return (<th key={column.name}>{column.name}</th>)
                    })}
                    {includeDelete && <th>Action</th>}
                </tr>
                </thead>
                <tbody>
                {usersForDisplay.map((user) => {
                    return (
                        <tr key={user.id}>
                            {columnsForDisplay.map((column) => {
                                return (
                                    <td key={user.id + column.name}>{ user[column.value]}</td>
                                )
                            })}
                            {includeDelete && (<td>
                                <button onClick={() => deleteUser(user.id)}>
                                    <img className="delete-icon" src={TrashCanIcon} alt="Trash Can" />
                                </button>
                            </td>)}
                        </tr>

                    )
                })}
                </tbody>
            </table>
        </>
    )
}

export default UsersTable;