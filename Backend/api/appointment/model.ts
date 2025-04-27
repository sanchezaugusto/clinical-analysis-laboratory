import { Schema, model } from 'mongoose';
// import bycrypt from 'bcrypt';

const Appointmentschema = new Schema({
  _id_patient: {
    type: String, // El _id del paciente, asumiendo que es un ObjectId de otro modelo (como Patient)
    ref: 'Patient', // Aquí es la referencia al modelo 'Patient', puedes cambiarlo si usas otro nombre de modelo
    required: true,
  },
  requestDate: {
    type: String, // La fecha de la solicitud, como string, aunque podrías usar Date si prefieres manipular las fechas
    required: true,
  },
  appointmentDate: {
    type: String, // La fecha de la cita
    required: true,
  },
  appointmentTime: {
    type: String, // La hora de la cita
    required: true,
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'cancelled'],
    default: 'scheduled',
  },
  reason: {
    type: String, // Motivo de la cita, es opcional
  },
  notes: {
    type: String, // Notas adicionales sobre la cita, opcional
  },
  phone: {
    type: String, // Teléfono, opcional
  },
  location: {
    type: String, // Ubicación de la cita, opcional
  },
  channel: {
    type: String, // Canal a través del cual se reservó la cita (presencial, teléfono, etc.), opcional
  },
  duration: {
    type: Number, // Duración de la cita en minutos, opcional
  },
  priority: {
    type: String,
    enum: ['high', 'medium', 'low'],
    default: 'medium',
  },
},
{
  timestamps: true, // Esto añadirá `createAt` y `updatedAt` automáticamente
}
  
);


const Appointment = model('Appointment', Appointmentschema);

export default Appointment;