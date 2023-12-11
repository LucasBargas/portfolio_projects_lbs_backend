"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CategoryRepository_1 = __importDefault(require("../../repositories/CategoryRepository"));
const ListCategoriesUseCase_1 = __importDefault(require("./ListCategoriesUseCase"));
const ListCategoriesController_1 = __importDefault(require("./ListCategoriesController"));
const categoryRepository = new CategoryRepository_1.default();
const listCategoriesUseCase = new ListCategoriesUseCase_1.default(categoryRepository);
const listCategoriesController = new ListCategoriesController_1.default(listCategoriesUseCase);
exports.default = listCategoriesController;
