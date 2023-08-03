import express from "express";
import {     authUser,
    registerUser,
    logoutUser,
    getUserprofile,
    updateUserProfile } from "../controllers/userController.js";

const router = express.Router();
 
router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)

router.route('/profile').get(getUserprofile).put(updateUserProfile)


export default router;