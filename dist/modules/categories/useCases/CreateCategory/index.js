"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryRepository_1 = __importDefault(require("../../repositories/CategoryRepository"));
const CreateCategoryUseCase_1 = __importDefault(require("./CreateCategoryUseCase"));
const CreateCategoryController_1 = __importDefault(require("./CreateCategoryController"));
const categoryRepository = new CategoryRepository_1.default();
const createCategoryUseCase = new CreateCategoryUseCase_1.default(categoryRepository);
const createCategoryController = new CreateCategoryController_1.default(createCategoryUseCase);
exports.default = createCategoryController;
