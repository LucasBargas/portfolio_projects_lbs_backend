"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const mongoose_1 = require("mongoose");
const projectsSchema = new mongoose_1.Schema({
    photos: { type: [Object], required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    categories: { type: [String], required: true },
    appLink: { type: String, required: true },
    gitHub: { type: String, required: true },
    trash: { type: Boolean, required: true },
}, { timestamps: true });
exports.Project = (0, mongoose_1.model)('Projects', projectsSchema);
