//models/User.js

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



// Schema definition
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  // email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Pre-save hook to hash password before saving
userSchema.pre('save', async function(next) {
  if (this.isModified('password') || this.isNew) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Method to compare passwords
userSchema.methods.comparePassword = function(candidatePassword) {
  return new Promise((resolve, reject) => {
      bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
          if (err) {
            console.log(err);
            return reject(err);
          }
          // console.log(isMatch);
          resolve(isMatch);
      });
  });
};


userSchema.methods.generateAuthToken = function() {
  // Ensure you have a secret key for JWT generation (ideally from your environment variables)
  const secretKey = process.env.SESSION_SECRET || 'your_secret_key_here';
  const token = jwt.sign({ _id: this._id }, secretKey, { expiresIn: '5m' }); // '5m' means 5 minutes
  return token;
};


// Compile and export the model
module.exports = mongoose.model('User', userSchema, "users");
