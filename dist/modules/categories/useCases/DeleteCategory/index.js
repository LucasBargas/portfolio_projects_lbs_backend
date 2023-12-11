"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryRepository_1 = __importDefault(require("../../repositories/CategoryRepository"));
const DeleteCategoryByIdUseCase_1 = __importDefault(require("./DeleteCategoryByIdUseCase"));
const DeleteCategoryByIdController_1 = __importDefault(require("./DeleteCategoryByIdController"));
const categoryRepository = new CategoryRepository_1.default();
const deleteCategoryByIdUseCase = new DeleteCategoryByIdUseCase_1.default(categoryRepository);
const deleteCategoryByIdController = new DeleteCategoryByIdController_1.default(deleteCategoryByIdUseCase);
exports.default = deleteCategoryByIdController;
