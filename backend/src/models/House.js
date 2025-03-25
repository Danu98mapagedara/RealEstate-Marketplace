const mongoose=require("mongoose");


const houseSchema=mongoose.Schema({
    city:String,
    district:String,
    type:String,
    title: String,
    location: String,
    price: Number,
    bedrooms: Number,
    bathrooms: Number,
    size: String,
    image: String,
    contactName:String,
    contactPhonenumber:String,


})


module.export=mongoose("House",houseSchema);