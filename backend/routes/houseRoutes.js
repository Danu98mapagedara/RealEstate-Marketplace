const  House = require('../models/House');

 const express = require("express");


 const {createHouse,getAllHouses}=require("../controllers/houseController");

const router=express.Router();


// Route to get all houses
router.get("/",getAllHouses);       
// Route to create a new house
router.post("/",createHouse);

module.exports=router;