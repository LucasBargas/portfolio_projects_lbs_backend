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
const imageUpload_1 = __importDefault(require("../middlewares/imageUpload"));
const PostPhoto_1 = __importDefault(require("../modules/photos/useCases/PostPhoto"));
const DeletePhotoById_1 = __importDefault(require("../modules/photos/useCases/DeletePhotoById"));
const ListPhotos_1 = __importDefault(require("../modules/photos/useCases/ListPhotos"));
const router = express_1.default.Router();
router.post('/post', CheckToken_1.default.handleCheckToken, imageUpload_1.default.single('photo'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield PostPhoto_1.default.handle(req, res);
}));
router.delete('/:id', CheckToken_1.default.handleCheckToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield DeletePhotoById_1.default.handle(req, res);
}));
router.get('/', CheckToken_1.default.handleCheckToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return yield ListPhotos_1.default.handle(req, res);
}));
exports.default = router;
