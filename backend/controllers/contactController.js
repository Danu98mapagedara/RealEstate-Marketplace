const Contact=require('../models/Contact');

exports.createContact=async(req,res)=>{

    try{
        const newContact=new Contact(req.body);
        await newContact.save();
        res.status(201).json(newContact);
    }
    catch(error){
        console.error("❌ Error creating contact:", error.message);
        res.status(500).json({message:"Internal server error"});
    }
}
