import { Request, Response } from 'express';
import { appointmentService } from './service';

const { getAllAppointments, getAppointmentsByUserId, getAppointmentById, createAppointment, deleteRecord} = appointmentService;


class AppointmentController {

  async getAllAppointments(req: Request, res: Response) {
    try {
        const appointments = await getAllAppointments();
        return res.status(200).json(appointments);
      } catch (error) {
        return res.status(400).json({ error: (error as Error).message });
      }
  }

  async getMyAppointments(req: Request, res: Response) {
    const id_patient = req.params.id_patient
    try {
        const appointments = await getAppointmentsByUserId(id_patient);
        return res.status(200).json(appointments);
      } catch (error) {
        return res.status(400).json({ error: (error as Error).message });
      }
  }

  async getAppointmentById(req: Request, res: Response){
    const id = req.params.id;
    try{
        console.log("controller");
        const records = await getAppointmentById(id);
        return res.status(200).json(records);
    }catch(error){
        return res.status(400).json({ error: (error as Error).message });
    }
  }

  async createAppointment(req: Request, res: Response){
    try{
        const appointmentBody = req.body;
        
        const appointment = await createAppointment(appointmentBody);
        res.status(201).json(appointment);
    }catch (error) {
        console.error('Error creating record:', error);
        res.status(500).json({ message: 'Server error', error: (error as Error).message });
    }
  }

  async deleteRecord(req: Request, res: Response){
    const id = req.params.id;
    try{
        const records = await deleteRecord(id);
        return res.status(200).json(records);
    }catch(error){
        return res.status(400).json({ error: (error as Error).message });
    }
  }

}
export const appointmentController = new AppointmentController();