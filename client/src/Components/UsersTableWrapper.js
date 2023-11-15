import React from 'react';
import './UsersTableWrapper.css'
import ColumnsPicker from "./Filters/ColumnsPicker";
import Search from "./Filters/Search";
import UsersTable from "./Table/UsersTable";
import AddUserButton from "./AddUserButton";

const UsersTableWrapper = ({ includeSearch, includeUsersDeleteButton, index }) => {
    return (
        <div className="UsersTableWrapper">
            <div className="table-filters">
                <ColumnsPicker index={index}/>
                {includeSearch && (<> <Search/> <AddUserButton /> </>)}
            </div>

            <UsersTable includeDelete={ includeUsersDeleteButton } index={index} includeSearch={includeSearch} />
        </div>
    )
}

export default UsersTableWrapper;