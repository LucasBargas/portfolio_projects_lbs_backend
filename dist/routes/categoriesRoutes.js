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
const CheckToken_1 = __importDefault(require("../middlewares/CheckToken"));
const CreateCategory_1 = __importDefault(require("../modules/categories/useCases/CreateCategory"));
const DeleteCategory_1 = __importDefault(require("../modules/categories/useCases/DeleteCategory"));
const ListCategories_1 = __importDefault(require("../modules/categories/useCases/ListCategories"));
const router = express_1.default.Router();
router.post('/create', CheckToken_1.default.handleCheckToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield CreateCategory_1.default.handle(req, res);
}));
router.delete('/:id', CheckToken_1.default.handleCheckToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield DeleteCategory_1.default.handle(req, res);
}));
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield ListCategories_1.default.handle(req, res);
}));
exports.default = router;
