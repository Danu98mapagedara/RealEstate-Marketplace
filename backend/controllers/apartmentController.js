const Apartment=require('../models/Apartment');

exports.getAllApartments=async(req,res)=>{
    try{
const apartments=await  Apartment.find();
res.json(apartments);
    }
    catch(error){
        console.error("❌ Error fetching apartments:", error.message);
        res.status(500).json({message:"Internal server error"});
    }
}
exports.createApartment=async(req,res)=>{
    try{
        const newApartment=new Apartment(req.body);
        await newApartment.save();
         res.status(201).json(newApartment);
    }
    catch(error){
        console.error("❌ Error creating apartment:", error.message);
        res.status(500).json({message:"Internal server error"});
    }
}

