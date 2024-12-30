import express from 'express';
import userRouter from '../api/user/routes';
import recordRouter from '../api/records/routes';

const router = express.Router();

router.use('/users', userRouter);
router.use('/records', recordRouter);

export default router;