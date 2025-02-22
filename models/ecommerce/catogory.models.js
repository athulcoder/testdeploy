import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  catogoryType: {
    type: String,
    required: true,
  },
});

export const Category = mongoose.model("Category", CategorySchema);
