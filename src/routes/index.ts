import express from 'express';
import userRoutes from './userRoutes';
import projectsRoutes from './projectsRoutes';
import photoRoutes from './photoRoutes';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/projects', projectsRoutes);
router.use('/photos', photoRoutes);

export default router;
