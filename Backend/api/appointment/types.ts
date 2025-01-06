export interface IAppointment {
    _id: string,
    _id_patient: string;
    requestDate: string;
    appointmentDate: string;
    appointmentTime: string;
    status: 'pending' | 'confirmed' | 'cancelled';
    reason?: string;
    notes?: string;
    phone?: string;
    location?: string;
    channel?: string;
    duration?: number;
    priority?: 'high' | 'medium' | 'low';
}
