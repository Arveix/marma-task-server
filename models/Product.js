import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    stock: Number,
    imageUrl: String,
    releaseDate: Date
},
{ collection: "products" }
);

const Product = mongoose.model("Product", productSchema);

export default Product;