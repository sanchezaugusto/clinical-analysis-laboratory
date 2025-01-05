import {recordDao} from './dao';
import { IRecord } from "./types";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { config } from 'dotenv';

config();

const { getAllRecords, getRecordById , createRecord, deleteRecord} = recordDao;

class RecordService {
  async getRecords() {
    try {
        const records = await getAllRecords();
        return records;
      } catch (error) {
        throw Error((error as Error).message);
      }
    }

  async getRecordById(id: string){
    try{
        const records = await getRecordById(id);
        return records;
    }catch(error){
        throw Error((error as Error).message);
    }

  }

  async createRecord(recordData: IRecord){
    try{
        const record = recordData;
        console.log('Record input to save service:', record);

        return await createRecord(record);
    }catch (error) {
      console.error('Error creating record:', error);
      throw Error((error as Error).message);
    }

  }
 
  async deleteRecord(id:string){
    try{
        const records = await deleteRecord(id);
        return records;
    }catch(error){
        throw Error((error as Error).message);
    }
  }

}

export const recordService = new RecordService();