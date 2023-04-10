import { Request, Response } from "express";
import doctorsServices from "../services/doctorsServices.js"


async function getDoctorSchedule(req: Request, res: Response) {
    const {id} = req.params

   

    try {
        const schedule = await doctorsServices.getDoctorSchedule(Number(id))
        res.send(schedule)

    } catch (error) {
        return res.status(500).send(error.message);
    }

}

export default {getDoctorSchedule}