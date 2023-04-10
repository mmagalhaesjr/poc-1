import { QueryResult } from "pg";
import connectionDb from "../config/database.js";
import { Doctor, Schedule } from "../protocols/schedule.js";

async function findDoctorById(id: number): Promise<QueryResult<Doctor>>{
    return await connectionDb.query(`
        SELECT * FROM doctors WHERE id = $1
    `,[id])
}


async function getDoctorSchedule(id: number): Promise<QueryResult<Schedule>>{
    return await connectionDb.query(`
        SELECT * FROM schedule WHERE doctor_id = $1
    `,[id])
}

export default{
    getDoctorSchedule,
    findDoctorById
}