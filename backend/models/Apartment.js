const mongoose = require('mongoose');


const apartmentSchema=new  mongoose.Schema({
    title: String,
    type: String,
    price: Number,
    size: String,
    city: String,
    district: String,
    image: String,
    contactName: String,
    contactPhoneNumber: String,
    room: Number,
    parking: Boolean, 
})

module.exports=mongoose.model('Apartment',apartmentSchema);