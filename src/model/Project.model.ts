import mongoose from "mongoose";

export interface Project {
    name: string;
    slug: string;
    description: string[];
    thumbnail: string;
    technologies: string[];
    repoLink?: string;
    liveLink?: string;
    addInTheTop?: boolean;
}

const ProjectSchema = new mongoose.Schema<Project>({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    description: {
        type: [String],
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    technologies: {
        type: [String],
        required: true,
    },
    repoLink: {
        type: String,
        required: true,
    },
    liveLink: {
        type: String,
        required: true,
    },
    addInTheTop: {
        type: Boolean,
        default: false,
    },
});

const ProjectModel = mongoose.models.Project as mongoose.Model<Project>
    || mongoose.model<Project>("Project", ProjectSchema);

export default ProjectModel;
