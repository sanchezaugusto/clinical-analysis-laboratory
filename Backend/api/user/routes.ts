import express from 'express';
import { userController } from './controller';
import { authorizeRole } from '../../middleware/authRole'


const { getAllUsers, getUserById, createUser, loginUser, deleteUser} = userController;

const userRouter = express.Router();

userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/register',createUser);
userRouter.post('/login',loginUser);
userRouter.delete('/delete/:id', deleteUser);

export default userRouter;