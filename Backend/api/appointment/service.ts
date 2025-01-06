import {appointmentDao} from './dao';
import { IAppointment } from "./types";
// import { compare } from "bcrypt";
// import { sign } from "jsonwebtoken";
// import { config } from 'dotenv';

// config();

const { getAllAppointments, getAppointmentsByUserId, getAppointmentById , createAppointment, deleteRecord} = appointmentDao;

class AppointmentService {

  async getAllAppointments() {
    try {
        const appointments = await getAllAppointments();
        return appointments;
      } catch (error) {
        throw Error((error as Error).message);
      }
    }

    async getAppointmentsByUserId(id_user: string){
      try{
          const appointments = await getAppointmentsByUserId(id_user);
          return appointments;
      }catch(error){
          throw Error((error as Error).message);
      }
  
    }
  async getAppointmentById(id: string){
    try{
        const appointments = await getAppointmentById(id);
        return appointments;
    }catch(error){
        throw Error((error as Error).message);
    }

  }

  async createAppointment(appointmentData: IAppointment){
    try{
        const appointment = appointmentData;
        return await createAppointment(appointment);
    }catch (error) {
      console.error('Error creating record:', error);
      throw Error((error as Error).message);
    }

  }
 
  async deleteRecord(id:string){
    try{
        const appointment = await deleteRecord(id);
        return appointment;
    }catch(error){
        throw Error((error as Error).message);
    }
  }

}

export const appointmentService = new AppointmentService();