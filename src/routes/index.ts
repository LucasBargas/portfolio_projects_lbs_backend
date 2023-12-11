import express from 'express';
import userRoutes from './userRoutes';
import projectsRoutes from './projectsRoutes';
import photoRoutes from './photoRoutes';
import categoriesRoutes from './categoriesRoutes';

const router = express.Router();

router.use('/user', userRoutes);
router.use('/projects', projectsRoutes);
router.use('/photos', photoRoutes);
router.use('/categories', categoriesRoutes);

export default router;
