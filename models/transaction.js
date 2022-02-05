const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: [true, 'Transaction type is required'],
  },
  category: {
    type: String,
    required: [true, 'Transaction category is required'],
  },
  amount: {
    type: Number,
    min: [0, 'Transaction amount cant be negative'],
    required: [true, 'Transaction amount is required']
  },
  description: {
    type: String,
    required: [true, 'Transaction description is required']
  },
  isRecurring: {
    type: Boolean,
    default: false
  },
}, {timestamps: true});

const transaction = mongoose.model('transaction', transactionSchema);
module.exports = transaction;