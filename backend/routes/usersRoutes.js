import express from "express";
import {     authUser,
    registerUser,
    logoutUser,
    getUserprofile,
    updateUserProfile } from "../controllers/userController.js";
    import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
 
router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)

router.route('/profile').get(protect, getUserprofile).put(protect, updateUserProfile)


export default router;