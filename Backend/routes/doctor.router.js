import express from "express";
import { Router } from "express";
import authMiddlewares from "../middlewares/auth.middlewares.js";
import {
  getDoctorByIdController,
  getDoctorInfoController,
  updateProfileController,
} from "../controllers/doctor.controller.js";

const router = Router();

// POST SINGLE DOC INFO
router.route("/getDoctorInfo").post(authMiddlewares, getDoctorInfoController);

// POST UPDATE PROFILE
router.route("/updateProfile").post(authMiddlewares, updateProfileController);

//POST GET SINGLE DOC INFO
router.route("/getDoctorById").post(authMiddlewares, getDoctorByIdController);
export default router;
