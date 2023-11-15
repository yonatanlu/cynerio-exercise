const dbConnection= require('../loaders/DB');

const getAllUsers = async () => {
    return new Promise((resolve, reject) => {
        dbConnection.all('Select * From users', [], (error, users) => {
            if (error)
                reject({ error })
            else
                resolve( { users })
        })
    })

}

const getUsers = (searchText) => {
    return new Promise((resolve, reject) => {
        dbConnection.all("Select * From users where Name Like ? OR Address Like ?", [`%${searchText}%`, `%${searchText}%`], (error, users) => {
            if (error)
                reject({ error })
            else
                resolve( { users });
        })
    })
}

const createUser = (user) => {
    const { Name, Address } = user;
    const isValid = isUserParamsValid(Name, Address);
    if (!isValid.isValid)
        return isValid;
    dbConnection.run('INSERT INTO users (Name, Address) VALUES (?, ?)', [Name, Address], (error) => {
        if (error)
            throw error
    });

    return { isValid: true }
}

const isUserParamsValid = (Name, Address) => {
    if (!Name || !Address)
        return { isValid : false, reason : 'Please provide Name and Address'}
    if (Name?.length < 3 || Name?.length > 32)
        return { isValid : false, reason : "Name's length should be between 3 and 32" };
    if (Address?.length < 3 || Address?.length > 100)
        return { isValid : false, reason : "Address length should be between 3 and 100" };
    if (!(/^[a-zA-Z ]+$/.test(Name)))
        return { isValid : false, reason : "Name should not contain numbers or special characters" };
    if (!(/^[a-zA-Z 0-9]+$/.test(Address)))
        return { isValid : false, reason : "Address should not contain special characters" };
    return { isValid : true };
}

const deleteUser = async (userId) => {
    return new Promise((resolve, reject) => {
        dbConnection.run('Delete from users where id = ?', [userId], (error) => {
            if (error)
                reject({ error })
            else
                resolve();
        })
    })
}

module.exports = { getAllUsers, getUsers, createUser, deleteUser }