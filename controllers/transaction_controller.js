const Transaction = require('../models/transaction');

const addTransaction = async (req, res) => {
  try {
    await Transaction.create(req.body);
    res.status(200).json({success: true, message: 'Transaction created'});
  } catch (error) {
    res.status(400).json({success: false, message: 'Transaction not created '+error.message});
  }
}

const getAllTransaction = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json({success: true, transactions});
  } catch (error) {
    res.status(400).json({success: false, message: 'Cant get transactions '+error.message})
  }
}

const getTransactionById = async (req, res) => {
  const { transaction_id } = req.params;
  try {
    const transaction = await Transaction.find({_id: transaction_id});
    res.status(200).json({success: true, transaction});
  } catch (error) {
    res.status(400).json({success: false, message: 'Cant get transaction '+error.message})
  }
}

module.exports = {
  addTransaction, getAllTransaction, getTransactionById
}