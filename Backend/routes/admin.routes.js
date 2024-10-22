import { Router } from "express";
import authMiddlewares from "../middlewares/auth.middlewares.js";
import {
  changeAccountStatusController,
  getAllDoctorsController,
  getAllUsersController,
} from "../controllers/admin.controller.js";

const router = Router();

//GET METHOD || USERS
router.route("/getAllUsers").get(authMiddlewares, getAllUsersController);

//GET METHOD || DOCTORS
router.route("/getAllDoctors").get(authMiddlewares, getAllDoctorsController);

//POST ACCOUNT STATUS
router
  .route("/changeAccountStatus")
  .post(authMiddlewares, changeAccountStatusController);

export default router;
