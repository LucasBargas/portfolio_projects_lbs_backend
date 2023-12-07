import { Schema, model } from 'mongoose';
import { IProject } from './IProject';

const projectsSchema = new Schema<IProject>(
  {
    photos: { type: [Object], required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    categories: { type: [String], required: true },
    appLink: { type: String, required: true },
    gitHub: { type: String, required: true },
    trash: { type: Boolean, required: true },
  },
  { timestamps: true },
);

export const Project = model<IProject>('Projects', projectsSchema);
