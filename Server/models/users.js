import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    maxlength: 32,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
});

const Users = mongoose.model("users", userSchema);

export { Users };
