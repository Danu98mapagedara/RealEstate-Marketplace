const mongoose = require('mongoose');


const apartmentSchema=new  mongoose.Schema({
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
})

module.exports=mongoose.model('Apartment',apartmentSchema);