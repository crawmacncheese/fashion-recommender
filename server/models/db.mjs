import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    _id: String,
    user: String,
    password: String, // this will probably be hashed
    /*
    i'm not sure about this one yet, but it's here just
    in case

    saved_outfits: [
        {
            brand: String,
            type: String,
            price: Number,
        }
    ]
    */
    // i'm also not sure if we want have this document
    // embedded or referenced yet.
});

// this next schema will probably be a product schema
// this info can be read from a datasets

/*
 
const productSchema = new mongoose.Schema({
    brand: String,
    name: String,
    type: String
    sku: String, // this will probably be hashed
    price: Number,
});

 */