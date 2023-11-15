import React from "react";
import './Search.css';
import useUsersStore from "../../StateManagment/UsersStore";

const Search = () => {
    const changeTextSearch = useUsersStore((state) => state.setTextSearch);

    return (<div className="search-container">
        <input type="text" className="search-box" placeholder="Search..." onChange={(event) => changeTextSearch(event.target.value)} />
        
    </div>)
}

export default Search;