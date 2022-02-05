const express = require('express');
const { 
  addTransaction, 
  getAllTransaction, 
  getTransactionById, 
  deleteTransactionById} = require('../controllers/transaction_controller');
const router = express.Router();

/* POST (Add) transaction */
router.post('/', addTransaction);

/* GET (Retrieve) all transactions */
router.get('/', getAllTransaction);

/* GET (Retrieve) single transaction */
router.get('/:transaction_id', getTransactionById);

/* DELETE (Delete) single transaction */
router.delete('/:transaction_id', deleteTransactionById);

module.exports = router;
