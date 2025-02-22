import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  productTitle: {
    type: String,
    required: true,
  },
  productImagesUrls: {
    type: String,
    required: true,
  },
  productDesc: {
    type: String,
    requured: true,
  },
  productRating: {
    type: Number,
    required: true,
  },
  productOwner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});
