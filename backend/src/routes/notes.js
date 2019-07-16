const { Router } = require('express');
const router = Router();
const { getNotes, createNote, getNote, updateNote, deleteNote }  = require('../controllers/notes.controller');

router.route('/')
    .get(getNotes)
    .post(createNote);

// http://localhost:3000/api/notes/1
router.route('/:id')
    .get(getNote)
    .put(updateNote)
    .delete(deleteNote);

module.exports = router;