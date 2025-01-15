const express = require('express');
const AlumniController = require('../controller/alumniControllers');
const router = express.Router();

router.get('/', AlumniController.index);
router.get('/search/:name', AlumniController.search);
router.get('/status/:freshGraduate', AlumniController.freshGraduate);
router.get('/status/:employed', AlumniController.employed);
router.get('/status/:unemployed', AlumniController.unemployed);
router.get('/:id', AlumniController.show);
router.post('/', AlumniController.store);
router.put('/:id', AlumniController.update);
router.delete('/:id', AlumniController.destroy);



module.exports = router;

