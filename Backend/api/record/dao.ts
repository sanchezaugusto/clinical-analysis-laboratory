import Record from "./model";
import { IRecord } from "./types";

class RecordDao {

  async getAllRecords() {
      try {
          const records = await Record.find();
          return records;
        } catch (error) {
          throw Error((error as Error).message);
        } 
  }

  async getRecordById(id : string){
      try{
          const records = await Record.findById(id);
          return records;
      }catch(error){
          throw Error((error as Error).message);
      }
  }

  async createRecord(recordData : IRecord){
      console.log("Record input to save DAO: ", recordData);
      try{
          const newRecord = await Record.create(recordData);
          console.log("Record created DAO: ", newRecord);
          return newRecord; 
      }catch(error){
          throw Error((error as Error).message);
      }   
  }

  async deleteRecord(id: string) {
    console.log("Record input to delete DAO: ", id);
    try {
      const record = await Record.findByIdAndDelete(id);
      return record;
    } catch (error) {
      throw Error((error as Error).message);
    }
  }

}

export const recordDao = new RecordDao();