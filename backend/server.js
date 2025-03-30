const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
require("dotenv").config();

const apartmentRoutes = require("./routes/apartmentRoutes");
const landRoutes = require("./routes/landRoutes");
const houseRoutes = require("./routes/HouseRoutes");


const app = express();
const PORT = process.env.PORT || 8000;


app.use(cors()); 
app.use(express.json()); 


mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(" MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB Connection Failed:", err));


app.use("/api/apartments", apartmentRoutes);
app.use("/api/lands", landRoutes);
app.use("/api/houses", houseRoutes);



app.get("/", (req, res) => {
  res.send("🚀 API is running...");
});


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
