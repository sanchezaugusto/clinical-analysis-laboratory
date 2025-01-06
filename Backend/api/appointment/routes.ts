// import express from 'express';
// import { appointmentController } from './controller';
// import { authorizeRole } from '../../middleware/authRole';


// const { getAllAppointments, getMyAppointments, getAppointmentById, createAppointment, deleteRecord} = appointmentController;

// const appointmentRouter = express.Router();

// appointmentRouter.get('/allAppointments', authorizeRole(["professional"]), getAllAppointments);
// appointmentRouter.get('/myAppointments', authorizeRole(["professional,patient"]), getMyAppointments);
// appointmentRouter.get('/myAppointments/:id', authorizeRole(["professional,patient"]), getAppointmentById);// solo deberia acceder el paciente que pidio el turno
// // recordRouter.get('/:id', authorizeRole(["professional,patient"]), getRecordById);
// appointmentRouter.post('/newAppointment', authorizeRole(["professional,patient"]), createAppointment);
// // recordRouter.delete('/delete/:id', authorizeRole(["professional"]), deleteRecord);

// export default appointmentRouter;