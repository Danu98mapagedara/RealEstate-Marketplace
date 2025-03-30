const  House = require('../models/House');


exports.getAllHouses=async(req,res)=>{
    try{
        const houses=await House.find();
        res.status(200).json(houses);
    }
    catch(error){
        console.error("❌ Error fetching houses:", error.message);
        res.status(500).json({message:"Internal server error"});
    }

}

exports.createHouse=async(req,res)=>{
    try{
        const newHouse=new House(req.body);
        await newHouse.save();
        res.status(201).json(newHouse);
    }
    catch(error){
        console.error("❌ Error creating house:", error.message);
        res.status(500).json({message:"Internal server error"});
    }
}