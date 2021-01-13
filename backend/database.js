var mongoose = require('mongoose');
require('dotenv/config');
const uri = process.env.DB_CONECTION;
const params = { useNewUrlParser: true, useUnifiedTopology: true }
const connectDb = async () => {
    const db = await mongoose.connect(uri, params);
    console.log("Database Connected!!");
}
module.exports = connectDb
// Take a
// obj p1 - > dockerize 

// obj p2 -> deploy to production
// 