const mongoose=require("mongoose");


const aprtmentSchema=mongoose.Schema({
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


module.exports = mongoose.model("Apartment", apartmentSchema);