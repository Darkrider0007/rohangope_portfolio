import mongoose from "mongoose";

export interface Article {
    topic: string,
    imageURL: string,
    alt: string,
    desc: string,
    link: string
}

const ArticleSchema = new mongoose.Schema<Article>({
    topic: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

const ArticleModel = mongoose.models.Article as mongoose.Model<Article>
    || mongoose.model<Article>("Article", ArticleSchema);

export default ArticleModel;