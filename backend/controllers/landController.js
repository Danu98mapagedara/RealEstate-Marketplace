const Land = require('../models/Land');


exports.getAllLands=async(req,res)=>{
    try{
const lands=await  Land.find();
res.status(200).json(lands);
    }
    catch(error){
        console.error("❌ Error fetching lands:", error.message);
        res.status(500).json({message:"Internal server error"});
    }
    
}

exports.createLand=async(req,res)=>{
    try{
        const newLand=new Land(req.body);
        await newLand.save();
        res.status(201).json(newLand);
    }
    catch(error){
        console.error("❌ Error creating land:", error.message);
        res.status(500).json({message:"Internal server error"});
    }
}