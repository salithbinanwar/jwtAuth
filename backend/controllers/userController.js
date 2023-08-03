import asyncHandler from "express-async-handler";
//*@desc auth user/set token
//*route POST /api/users/auth
//!@access public
const authUser = asyncHandler( async (req, res) => {

    res.status(200).send("User Authenticated");
})

//*@desc register user/set token
//*route POST /api/users
//!@access public
const registerUser = asyncHandler( async (req, res) => {

    res.status(200).send("User registered");
})


//*@desc logout user/set token
//*route POST /api/users/logout
//!@access public
const logoutUser = asyncHandler( async (req, res) => {

    res.status(200).send("User logged out");
})

//*@desc get user profile 
//*route GET /api/users/profile
//!@access private
const getUserprofile = asyncHandler( async (req, res) => {

    res.status(200).send("User profile");
})


//*@desc update user profile
//*route PUT /api/users/profile
//!@access private
const updateUserProfile = asyncHandler( async (req, res) => {

    res.status(200).send("user profile updated");
})


export {
    authUser,
    registerUser,
    logoutUser,
    getUserprofile,
    updateUserProfile
}