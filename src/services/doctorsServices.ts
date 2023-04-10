import doctorsRepositories from "../repositories/doctorsRepositories.js"

async function getDoctorSchedule(id: number) {
    const resultDoctor = await doctorsRepositories.findDoctorById(id);
    if(!resultDoctor.rowCount)  throw new Error("No result for this search");

    const resultSchedule = await doctorsRepositories.getDoctorSchedule(id);
    return resultSchedule.rows


}
export default {
   
    getDoctorSchedule
}
