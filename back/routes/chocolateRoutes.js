const express = require('express');

const chocolateController = require('./../controllers/chocoController')

const router = express.Router();
//router.param('id', chocolateController.checkID);
           
       
router.route('/top-5-latest').get(chocolateController.latestProduct, chocolateController.getAllChocolate);
router.route('/').get(chocolateController.getAllChocolate).post(chocolateController.createChocolate);
router.route('/:id').get(chocolateController.getChocolate).patch(chocolateController.updateChocolate).delete(chocolateController.deleteChocolate);

module.exports = router;