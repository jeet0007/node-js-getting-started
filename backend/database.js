var mongoose = require('mongoose');
require('dotenv/config');
const uri = 'mongodb+srv://Jeet:Jeet0007@cluster0.kzud1.mongodb.net/StoneCold?retryWrites=true&w=majority';
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