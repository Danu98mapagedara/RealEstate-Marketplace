import Land from "../models/Land.js";


exports.getlands=async (req,res)=>{

    try{
   const lands=await Land.find();
   res.status(200).json(lands);

    }
    catch(error){
res.status(500).json({message:"Error frteching  lands"})
    };
   

};



exports.createlands =async(req,res)=>{
    try{
 const newLand =new  Land(req.body);
  await  newLand.save();
  res.status(201).json(newLand);
    }
    catch(error){
res.status(400).json({message:"Error creating Land"})
    }
}

