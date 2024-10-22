import express from "express";
import { Router } from "express";
import {
  authController,
  loginController,
  registerController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
} from "../controllers/user.controller.js";
import authMiddlewares from "../middlewares/auth.middlewares.js";

// router object
const router = Router();

// routes
//Login || Post
router.route("/login").post(loginController);

// Register
router.route("/register").post(registerController);

//Auth || Post
router.route("/getUserData").post(authMiddlewares, authController);

//Apply Doctor || Post
router.route("/apply-doctor").post(authMiddlewares, applyDoctorController);

//Notification Doctor || Post
router
  .route("/get-all-notification")
  .post(authMiddlewares, getAllNotificationController);

//Notification Doctor || Post
router
  .route("/delete-all-notification")
  .post(authMiddlewares, deleteAllNotificationController);

//GET ALL DOC
router.route("/getAllDoctors").get(authMiddlewares, getAllDoctorsController);

//BOOK APPOINTMENT
router
  .route("/book-appointment")
  .post(authMiddlewares, bookAppointmentController);

export default router;
