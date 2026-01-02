import { model, models, Schema } from "mongoose";

interface IFile {
    title: string;
    file_id: string;
    thumbnail: string;
    downloadCount: number;
    isPopular: boolean;
}

const fileSchema = new Schema<IFile>({
    title: {
        type: String,
        required: true
    },
    file_id: {
        type: String,
        required: true,
        unique: true
    },
    thumbnail: {
        type: String
    },
    downloadCount: {
        type: Number,
        default: 0
    },
    isPopular: {
        type: Boolean,
        default: false
    },
});

export const File = model<IFile>("file", fileSchema)