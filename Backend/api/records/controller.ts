import { Request, Response } from 'express';
import { recordService } from './service';

const {getRecords, getRecordById, createRecord, deleteRecord} = recordService;


class RecordController {
  async getAllRecords(req: Request, res: Response) {
    try {
        console.log("controller");
        const records = await getRecords();
        return res.status(200).json(records);
      } catch (error) {
        return res.status(400).json({ error: (error as Error).message });
      }
  }
  async getRecordById(req: Request, res: Response){
    const id = req.params.id;
    try{
        console.log("controller");
        const records = await getRecordById(id);
        return res.status(200).json(records);
    }catch(error){
        return res.status(400).json({ error: (error as Error).message });
    }
  }
  async createRecord(req: Request, res: Response){
    try{
        const recordBody = req.body;
        
        const record = await createRecord(recordBody);
        res.status(201).json(record);
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
export const recordController = new RecordController();