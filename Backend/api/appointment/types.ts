export interface IAppointment {
    _id: string | undefined;
    _id_patient: string;
    requestDate: string;
    appointmentDate: string;
    appointmentTime: string;
    status: 'scheduled' | 'completed' | 'cancelled';
    reason?: string;
    notes?: string;
    phone?: string;
    location?: string;
    channel?: string;
    duration?: number;
    priority?: 'high' | 'medium' | 'low';
    createAt?: Date;
    updatedAt?: Date;
}
