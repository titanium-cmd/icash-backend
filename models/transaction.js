const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  transaction_type: {
    type: String,
    required: [true, 'Transaction type is required'],
  },
  transaction_mode: {
    type: String,
    required: [true, 'Transaction mode is required'],
  },
  transaction_amount: {
    type: Number,
    min: [0, 'Transaction amount cant be negative'],
    required: [true, 'Transaction amount is required']
  },
  transaction_description: {
    type: String,
    required: [true, 'Transaction description is required']
  },
  isRecurring: {
    type: Boolean,
    default: false
  },
});