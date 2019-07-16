const { Router } = require('express');
const router = Router();
const { getUsers, createUser, deleteUser } = require('../controllers/users.controller')

router.route('/')
    .get(getUsers)
    .post(createUser);

// http://localhost:3000/api/users/1
router.route('/:id')
    .delete(deleteUser);

module.exports = router;