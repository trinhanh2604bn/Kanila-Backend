const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// ----------------------------------------------------
// Register
// ----------------------------------------------------
const register = async (req, res) => {
  try {
    const { fullName, email, phone, password, gender, birthDate } = req.body;

    const exists = await User.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      email,
      phone,
      gender,
      birthDate,
      password: hashed,               // ✔ lưu vào field password
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// ----------------------------------------------------
// Login
// ----------------------------------------------------
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const match = await bcrypt.compare(password, user.password); // ✔
    if (!match)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    res.json({
      message: "Login successful",
      token,
      userId: user._id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// ----------------------------------------------------
// Get Own Profile
// ----------------------------------------------------
const getUser = async (req, res) => {
  try {
    const {id} = req.params
    const user = await User.findById(id)         // ✔ ẩn password
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUsers = async (req,res) => {
    try {
       const user = await User.find({}) 
       res.json(user)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
}



// ----------------------------------------------------
// Update Profile
// ----------------------------------------------------
const updateProfile = async (req, res) => {
  try {

    const {id} = req.params
    const user = await User.findByIdAndUpdate(id, req.body)
    if (!user){
        return res.status(404).json({message: "user not found"})
    }
    const updateProfile = await User.findById(id)
     res.status(200).json(updateProfile)

    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


//     const { fullName, phone, gender, birthDate } = req.body;

//     const updated = await User.findByIdAndUpdate(
//       req.userId,
//       { fullName, phone, gender, birthDate },
//       { new: true }
//     ).select("-password");            // ✔ ẩn password

//     res.json({
//       message: "Profile updated successfully",
//       user: updated,
//     });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


// ----------------------------------------------------
// Change Password
// ----------------------------------------------------
const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    
    const user = await User.findById(req.params.id);
    if (!user)
      return res.status(404).json({ message: "User not found" });

    const match = await bcrypt.compare(oldPassword, user.password); // ✔
    if (!match)
      return res.status(400).json({ message: "Old password incorrect" });

    user.password = await bcrypt.hash(newPassword, 10);             // ✔
    await user.save();

    res.json({ message: "Password changed successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// ----------------------------------------------------
// Delete Account
// ----------------------------------------------------
const deleteAccount = async (req, res) => {
  try {
    const {id} = req.params
    const user = await User.findByIdAndDelete(id);
    if (!user){
        return res.status(404).json({message : "User not found"})
    }
    res.json({ message: "Account deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
  register,
  login,
  getUser,
  updateProfile,
  changePassword,
  deleteAccount,
  getUsers
};
