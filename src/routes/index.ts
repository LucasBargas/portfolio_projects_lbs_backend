import express from 'express';
import userRoutes from './userRoutes';
import projectsRoutes from './projectsRoutes';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/projects', projectsRoutes);

export default router;
