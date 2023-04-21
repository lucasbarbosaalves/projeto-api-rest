import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Lucas:123@cluster0.bni0ydk.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;