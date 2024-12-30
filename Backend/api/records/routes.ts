import express from 'express';
import { recordController } from './controller';
import { authorizeRole } from '../../middleware/authRole';


const { getAllRecords, getRecordById, createRecord, deleteRecord} = recordController;

const recordRouter = express.Router();

recordRouter.get('/', getAllRecords);
recordRouter.get('/:id', getRecordById);
recordRouter.post('/newRecord', authorizeRole, createRecord);
recordRouter.delete('/delete/:id', deleteRecord);

export default recordRouter;