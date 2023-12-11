"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Photo = void 0;
const mongoose_1 = require("mongoose");
const photosSchema = new mongoose_1.Schema({
    filename: { type: String, required: true },
    destination: { type: String, required: true },
}, { timestamps: true });
exports.Photo = (0, mongoose_1.model)('Photo', photosSchema);
