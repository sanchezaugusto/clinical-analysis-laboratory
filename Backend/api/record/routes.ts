import express from 'express';
import { recordController } from './controller';
import { authorizeRole } from '../../middleware/authRole';


const { getAllRecords, getRecordById, createRecord, deleteRecord} = recordController;

const recordRouter = express.Router();

recordRouter.get('/', authorizeRole(["professional"]), getAllRecords);
recordRouter.get('/:id', authorizeRole(["professional,patient"]), getRecordById);
recordRouter.post('/newRecord', authorizeRole(["professional"]), createRecord);
recordRouter.delete('/delete/:id', authorizeRole(["professional"]), deleteRecord);

export default recordRouter;