import mongoose, { mongo } from "mongoose";
import { Staff } from "./stafs.models";

const PatientsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    registerationNo: {
      type: Number,
      required: true,
      unquie: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },

    consultedDoctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
    medicine: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Medicine",
    },
  },
  { timestamps: true }
);
