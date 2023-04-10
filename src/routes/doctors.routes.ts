import doctorsController from "../controllers/doctorsControllers.js";

import { Router } from "express";

const doctorsRoutes = Router()

doctorsRoutes.get('/doctor/:id/schedule',doctorsController.getDoctorSchedule) 

export  {doctorsRoutes}