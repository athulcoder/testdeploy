import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: [true, "Password must be given"],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
