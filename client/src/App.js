import React, { useEffect, useState } from 'react';
import './App.css';
import { getUsers } from './Axios';
import UsersTableWrapper from "./Components/UsersTableWrapper";
import useUsersStore from "./StateManagment/UsersStore";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const { setUsers, shouldUpdate, setShouldUpdate } = useUsersStore((state) => {
        return { setUsers: state.setUsers, shouldUpdate : state.shouldUpdate, setShouldUpdate : state.setShouldUpdate }
    })

    useEffect(() => {
        const fetchData = async () => {
            const data = await getUsers();
            setUsers(data.users);
            setIsLoading(false);
            setShouldUpdate(false);
        }

        if (shouldUpdate)
            fetchData();
    }, [shouldUpdate]);

    if (isLoading)
        return (<h1>Page is being loaded</h1>)


    return (
        <div>
            <header className="header">
                <div className="header-content">
                    <h1 id="header-text">Design</h1>
                </div>
            </header>
            <UsersTableWrapper includeSearch={true} includeUsersDeleteButton={true} index={0} />
            <UsersTableWrapper includeSearch={false} includeUsersDeleteButton={false} index={1} />
        </div>
    );
}

export default App;
