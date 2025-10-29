import User from "..models/User"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// Generate jwt token
const generateToken = (userId) => {
    return jwt.sign({
        id: userId
    }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

//@desc     Register a new User
//@route    Post /api/auth/register
//@access   Public
const registerUser = async(req, res) => {

};

//@desc     Login a User
//@route    Post /api/auth/login
//@access   Public
const loginUser = async(req, res) => {

};

//@desc     Get a User Profile
//@route    GET /api/auth/profile
//@access   Private(Requires JWT)
const getUserProfile = async(req, req) => {

};

//@desc     Update a User
//@route    PUT /api/auth/login
//@access   Private (requires JWT)
const updateUserProfile = async(req, res) => {

}

export { registerUser, loginUser, getUserProfile, updateUserProfile };