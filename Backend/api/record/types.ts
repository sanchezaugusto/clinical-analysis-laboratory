export interface IRecord {
    _id: string | undefined;
    _id_professional: string;
    _id_patient: string;
    title: string;
    file: string;
    description?: string;
    date: Date;
}