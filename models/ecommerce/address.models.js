import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
  {
    name: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    houseName: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    postOffice: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Address = mongoose.model("Address", AddressSchema);
