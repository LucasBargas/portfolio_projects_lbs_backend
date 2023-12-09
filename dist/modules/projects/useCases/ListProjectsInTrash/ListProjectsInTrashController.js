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
Object.defineProperty(exports, "__esModule", { value: true });
class ListProjectsInTrashController {
    constructor(listProjectsInTrashUseCase) {
        this.listProjectsInTrashUseCase = listProjectsInTrashUseCase;
    }
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const projects = yield this.listProjectsInTrashUseCase.execute();
                if (!projects || projects.length === 0) {
                    return res.status(422).json({
                        errors: ['Ainda não foram adicionados projetos na lixeira'],
                    });
                }
                return res.status(201).json({
                    total: projects.length,
                    projects,
                });
            }
            catch (error) {
                return res
                    .status(422)
                    .json({ errors: ['Houve um erro, tente novamente mais tarde!'] });
            }
        });
    }
}
exports.default = ListProjectsInTrashController;
