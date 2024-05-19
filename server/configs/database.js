//database.js

const mongoose = require('mongoose');

// Using environment variables to keep sensitive information secure
const uri = process.env.MONGO_URI || "mongodb://localhost/myapp";

const options = {
};

mongoose.connect(uri, options)
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.error("Could not connect to MongoDB:", err));

module.exports = mongoose;
