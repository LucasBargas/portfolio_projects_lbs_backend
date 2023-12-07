"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./userRoutes"));
const projectsRoutes_1 = __importDefault(require("./projectsRoutes"));
const router = express_1.default.Router();
router.use('/user', userRoutes_1.default);
router.use('/projects', projectsRoutes_1.default);
exports.default = router;
