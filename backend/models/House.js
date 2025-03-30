const mongoose = require("mongoose");

const houseSchema=new  mongoose.Schema({
    title: String,
    type: String,
    price: Number,
    size: String,
    description: String,
    city: String,
    district: String,
    image: String,
    contactName: String,
    contactPhoneNumber: String,
    bedrooms: Number,
    bathrooms: Number,
    garden: Boolean,
    airConditioning: Boolean,
    balcony: Boolean, 

})
module.exports=mongoose.model('House',houseSchema);