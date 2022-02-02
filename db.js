require('dotenv').config();
const mongoose = require('mongoose');


const connectDB = async () => {
  const env = process.env.NODE_ENV || 'development';
  const db_uri = env === 'development' ? process.env.LOCAL_DB_URI : process.env.ATLAS_DB_URI
  try {    
    await mongoose.connect(db_uri);
    console.log('DB connected');
  } catch (error) {
    console.log('DB not connected ', error.message);
  }
}

module.exports = connectDB;
