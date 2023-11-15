const express = require('express');
const { getAllUsers, getUsers, createUser, deleteUser } = require("../BusinessLogic/usersBL");
const router = express.Router();

router.get('/', async (req, res, next) => {
  const { searchText } = req.query;
  let users = searchText ? await getUsers(searchText) : await getAllUsers();
  res.send(users)
});

router.post('/', (req, res, next) => {
  const user = req.body;
  const userResponse = createUser(user);
  if (!userResponse.isValid) {
    res.status(500).send({ error : userResponse.reason })
    return ;
  }
  res.send(userResponse);
})

router.delete('/:userId', async (req, res, next) => {
  const userId = req.params.userId;
  deleteUser(userId);
  res.send({ message : 'User was deleted' })
})

module.exports = router;
