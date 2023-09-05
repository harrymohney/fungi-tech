const express = require('express');
const router = express.Router();
const strainController = require('../controllers/strains');

router.post('/', strainController.createStrain);
router.get('/', strainController.getAllStrains);
router.get('/:id', strainController.getStrainById);
router.put('/:id', strainController.updateStrainById);
router.delete('/:id', strainController.deleteStrainById);

module.exports = router;
