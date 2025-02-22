import mongoose from "mongoose";

const UserSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      lowercase: true,
    },
    secondname: {
      type: String,
      required: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    profileUrl: {
      type: String,
      default: "",
    },
    phone: {
      type: Number,
      required: true,
    },
  },
  { timestamp: true }
);

export const User = mongoose.model("User", UserSchema);
