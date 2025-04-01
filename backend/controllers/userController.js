const User=require("../models/user");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const dotenv=require("dotenv");



exports.signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save new user
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "User created successfully" });

    } catch (err) {
        res.status(500).json({ message: "Error creating user" });
    }
};

// **User Login Controller**
exports.login=async(req,res)=>{
    const {email,password}=req.body;

    try{
        //check if user exists
     const user=await  User.findOne({email});
     if(!user){
        return res.status(400).jason({message:"User not found"})
     }

     //compare  password
const isMatched=await  bcrypt.compare(password,user.password);
if(!isMatched){
    return res.status(400).json({message:"Invalid credentials"})
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
  
      res.json({ token, message: "Login successful" });
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }


    };
