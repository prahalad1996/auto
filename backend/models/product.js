import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters long"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minlength: [10, "Description must be at least 10 characters long"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be a positive value"],
    },
    image: {
      type: String, // Changed from Number to String (URL/File path)
      required: [true, "Image URL is required"],
    },
  },
  {
    timestamps: true, // Adds createdAt & updatedAt fields automatically
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
