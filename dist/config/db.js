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
/* eslint-disable no-console */
const mongoose_1 = __importDefault(require("mongoose"));
class DbConn {
    static handleDbConn() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                mongoose_1.default.set('strictQuery', true);
                const dbConn = mongoose_1.default.connect(process.env.MONGO_URL);
                console.log('Connected successfull the Mongodb with Mongoose.');
                return dbConn;
            }
            catch (err) {
                console.log('Error:', err);
                return err;
            }
        });
    }
}
DbConn.handleDbConn().catch((err) => console.log(`Error: ${err}`));
exports.default = mongoose_1.default;
