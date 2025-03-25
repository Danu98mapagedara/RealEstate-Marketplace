const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const landRoutes = require("./routes/landRoutes");

const app = express(); 
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Real Estate API');
});
app.use("/api/lands", landRoutes);

// Connect to DB
connectDB();

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
