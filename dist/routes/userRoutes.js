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
const CreateUser_1 = __importDefault(require("../modules/user/useCases/CreateUser"));
const LoginUser_1 = __importDefault(require("../modules/user/useCases/LoginUser"));
const Validate_1 = __importDefault(require("../middlewares/Validate"));
const RegisterValidations_1 = __importDefault(require("../middlewares/RegisterValidations"));
const LoginValidations_1 = __importDefault(require("../middlewares/LoginValidations"));
const EditUser_1 = __importDefault(require("../modules/user/useCases/EditUser"));
const EditUserValidations_1 = __importDefault(require("../middlewares/EditUserValidations"));
const router = express_1.default.Router();
router.post('/register', RegisterValidations_1.default.handleRegisterValidations(), Validate_1.default.handleValidate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield CreateUser_1.default.handle(req, res);
}));
router.post('/login', LoginValidations_1.default.handleLoginValidations(), Validate_1.default.handleValidate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield LoginUser_1.default.handle(req, res);
}));
router.patch('/:id', CheckToken_1.default.handleCheckToken, EditUserValidations_1.default.handleEditUserValidations(), Validate_1.default.handleValidate, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield EditUser_1.default.handle(req, res);
}));
exports.default = router;
