import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserByID,
  getUsers,
  updateUser,
  updateUserProfile,
  deleteUser,
  getUserProfile,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").post(registerUser).get(getUsers);
router.route("/logout").post(logoutUser);
router.route("/login").post(authUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);
router.route("/:id").delete(deleteUser).get(getUserByID).put(updateUser);

export default router;
