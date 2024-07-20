import dbConnect from "@/lib/dbConnect";
import { userDetailsFromToken } from "@/lib/userDetailsFromToken";
import ArticleModel from "@/model/Article.model";
export async function POST(request: Request) {
    await dbConnect();

    try {
        const { topic, imageURL, alt, desc, link } = await request.json();

        const getUser = await userDetailsFromToken();


        if (!getUser) {
            return Response.json(
                {
                    success: false,
                    message: 'Unauthorized',
                },
                { status: 401 }
            );
        }

        if (!topic || !imageURL || !alt || !desc || !link) {
            return new Response(JSON.stringify({
                success: false,
                message: 'All fields are required',
            }), { status: 400 });
        }

        const alreadyExists = await ArticleModel.findOne({ link });

        if (alreadyExists) {
            return new Response(JSON.stringify({
                success: false,
                message: 'Article already exists',
            }), { status: 400 });
        }

        const newArticle = new ArticleModel({
            topic,
            imageURL,
            alt,
            desc,
            link,
        });

        await newArticle.save();

        return new Response(JSON.stringify({
            success: true,
            message: 'Project added successfully',
        }), { status: 201 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({
            success: false,
            message: 'Internal server error',
            error: error
        }), { status: 500 });
    }
}