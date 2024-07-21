import dbConnect from "@/lib/dbConnect";
import ArticleModel from "@/model/Article.model";

export async function GET() {
    await dbConnect();

    try {
        const articles = await ArticleModel.find();

        if (!articles) {
            return new Response(JSON.stringify({
                success: false,
                message: 'No articles found'
            }));
        }


        return new Response(JSON.stringify({
            success: true,
            message: 'Articles found',
            articles: articles
        }), { status: 200 });
    } catch (error: any) {
        return new Response(JSON.stringify({
            success: false,
            message: 'Internal server error',
            error: error.message
        }), { status: 500 });
    }
}
