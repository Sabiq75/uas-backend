const express = require('express');
const AlumniController = require('../controller/alumniControllers');
const router = express.Router();

router.get('/', AlumniController.getAll);
router.get('/:id', AlumniController.getById);
router.post('/', AlumniController.create);
router.put('/:id', AlumniController.update);
router.delete('/:id', AlumniController.delete);



module.exports = router;

