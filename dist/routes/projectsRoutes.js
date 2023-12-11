"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CreateProject_1 = __importDefault(require("../modules/projects/useCases/CreateProject"));
const CheckToken_1 = __importDefault(require("../middlewares/CheckToken"));
const ListProjects_1 = __importDefault(require("../modules/projects/useCases/ListProjects"));
const ProjectInTrashById_1 = __importDefault(require("../modules/projects/useCases/ProjectInTrashById"));
const ListProjectsInTrash_1 = __importDefault(require("../modules/projects/useCases/ListProjectsInTrash"));
const ProjectById_1 = __importDefault(require("../modules/projects/useCases/ProjectById"));
const UpdateProjectById_1 = __importDefault(require("../modules/projects/useCases/UpdateProjectById"));
const DeleteProjectById_1 = __importDefault(require("../modules/projects/useCases/DeleteProjectById"));
const Validate_1 = __importDefault(require("../middlewares/Validate"));
const ProjectValidations_1 = __importDefault(require("../middlewares/ProjectValidations"));
const router = express_1.default.Router();
router.post('/create', CheckToken_1.default.handleCheckToken, ProjectValidations_1.default.handleProjectValidations(), Validate_1.default.handleValidate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield CreateProject_1.default.handle(req, res);
}));
router.patch('/:id', CheckToken_1.default.handleCheckToken, ProjectValidations_1.default.handleProjectValidations(), Validate_1.default.handleValidate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield UpdateProjectById_1.default.handle(req, res);
}));
router.delete('/:id', CheckToken_1.default.handleCheckToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield DeleteProjectById_1.default.handle(req, res);
}));
router.patch('/trash/:id', CheckToken_1.default.handleCheckToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield ProjectInTrashById_1.default.handle(req, res);
}));
router.get('/trash', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield ListProjectsInTrash_1.default.handle(req, res);
}));
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield ProjectById_1.default.handle(req, res);
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield ListProjects_1.default.handle(req, res);
}));
exports.default = router;
