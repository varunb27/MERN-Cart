import express from "express";
const router = express.Router();

import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByid,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser).get(protect, admin, getUsers);

router.route("/login").post(authUser);

router.route("/profile").get(protect, getUserProfile);
router.route("/profile").put(protect, updateUserProfile);

router
  .route("/:id")
  .get(protect, admin, getUserByid)
  .put(protect, admin, updateUser)
  .delete(protect, admin, deleteUser);

export default router;
