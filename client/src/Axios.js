import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001'
});

const getUsers = async (searchText = '') => {
    let path = '/v1/users';
    if (searchText.length) path = `${path}?searchText=${searchText}`
    return (await instance.get(path))?.data;
}

const createUser = async (user) => {
    return (await instance.post('/v1/users', user));
}

const deleteUser = async (userId) => {
    return (await instance.delete(`/v1/users/${userId}`))
}

export { getUsers, createUser, deleteUser };