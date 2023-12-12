"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    email: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: false },
    fullName: { type: String, required: false },
    bio: { type: String, required: false },
    linkedin: { type: String, required: false },
    github: { type: String, required: false },
    whatsapp: { type: String, required: false },
}, { timestamps: true });
exports.User = (0, mongoose_1.model)('User', userSchema);
