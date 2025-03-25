const mongoose=require("mongoose");

const landSchema = mongoose.Schema({
    title: String,
    location: String,
    price: Number,
    size: String,
    description: String,
    city:String,
    district:String,
    type:String,
    image: String,
    contactName:String,
    contactPhonenumber:String,
  });

  module.export=mongoose.model("Land",landSchema);


  