const Land = require('../models/Land');
const express = require("express");

const {createLand,getAllLands}=require("../controllers/landController");

const router=express.Router();

// Route to get all lands
router.get("/",getAllLands);   
// Route to create a new land
router.post("/",createLand);

module.exports=router;