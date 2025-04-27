import Appointment from "./model";
import { IAppointment } from "./types";

class AppointmentDao {

  async getAllAppointments() {
    try {
        const appointments = await Appointment.find();
        return appointments;
    } catch (error){
      throw Error((error as Error).message);
    } 
  }

  async getAppointmentsByUserId(id_user : string){
    try{
        const appointments = await Appointment.find({users_id: id_user});
        return appointments;
    }catch(error){
        throw Error((error as Error).message);
    }
  }

  async getAppointmentById(id : string){
    try{
        const appointments = await Appointment.findById(id);
        return appointments;
    }catch(error){
        throw Error((error as Error).message);
    }
  }

  async createAppointment(appointmentData : IAppointment){
    try{
        const newAppointment = await Appointment.create(appointmentData);
        console.log("Record created DAO: ", newAppointment);
        return newAppointment; 
    }catch(error){
        throw Error((error as Error).message);
    }
  }

  async deleteRecord(id: string) {
    console.log("Record input to delete DAO: ", id);
    try {
      const record = await Appointment.findByIdAndDelete(id);
      return record;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }

}

export const appointmentDao = new AppointmentDao();