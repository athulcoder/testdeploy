import mongoose from "mongoose";

const MedicineSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      requried: true,
    },
    manufacturedDate: {
      type: Date,
      required: true,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);
