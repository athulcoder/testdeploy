import mongoose from "mongoose";
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

    consultedDoctor: {},
  },
  { timestamps: true }
);
