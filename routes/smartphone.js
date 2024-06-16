const express = require('express')
const router = express.Router()

const studentService = require('../services/smartphoneService')

router.get('/all', studentService.getAll);
router.get('/:id', studentService.getById)
router.post('/add', studentService.add);
router.delete('/:id', studentService.delete);
router.patch('/:id', studentService.update);

module.exports = router;