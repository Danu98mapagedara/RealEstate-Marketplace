const Apartment = require('../models/Apartment');

const express = require("express");

const {createApartment,getAllApartments}=require("../controllers/apartmentController");

const router=express.Router();

// Route to get all apartments
router.get("/",getAllApartments);
// Route to create a new apartment
router.post("/",createApartment);

module.exports=router;