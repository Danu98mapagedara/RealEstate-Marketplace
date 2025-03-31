const  mongoose=require("mongoose");

const landSchema=new mongoose.Schema({

    title: String,
    type: String,
    price: String,
    size: String,
    description: String,
    city: String,
    district: String,
    image: String,
    contactName: String,
    contactPhoneNumber: String,
})
 module.exports=mongoose.model('Land',landSchema);