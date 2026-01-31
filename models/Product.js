import mongoose from "mongoose";
import connectDB from "../config/db";

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
    imageUrl: String,
    releaseDate: Date
});

const Product = connectDB.model("Product", productSchema);

export default Product;
