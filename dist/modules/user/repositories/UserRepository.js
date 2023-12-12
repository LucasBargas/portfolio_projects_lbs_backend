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
const mongoose_1 = __importDefault(require("mongoose"));
const User_1 = require("../models/User");
class UserRepository {
    constructor() { }
    createUser({ email, username, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = { email, username, password };
            yield User_1.User.create(newUser);
            return newUser;
        });
    }
    editUser({ id, email, username, fullName, bio, linkedin, github, whatsapp, }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const objId = new mongoose_1.default.Types.ObjectId(id);
                const user = yield User_1.User.findById(objId);
                user.email = email;
                user.username = username;
                user.fullName = fullName;
                user.bio = bio;
                user.linkedin = linkedin;
                user.github = github;
                user.whatsapp = whatsapp;
                yield user.save();
                return user;
            }
            catch (error) {
                return error;
            }
        });
    }
    loginUser({ username, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = { username, password };
            return user;
        });
    }
}
exports.default = UserRepository;
