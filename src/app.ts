import express, { json } from "express";
import cors from "cors";
import { doctorsRoutes } from "./routes/doctors.routes.js";
import dotenv from "dotenv";

dotenv.config()


const app = express();
app.use(json());
app.use(cors());
app.use(doctorsRoutes)


const port = process.env.PORT || 5002;
app.listen(port, () => console.log(`***Server running in port: ${port}***`));