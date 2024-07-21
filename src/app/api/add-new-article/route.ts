import dbConnect from "@/lib/dbConnect";
import { userDetailsFromToken } from "@/lib/userDetailsFromToken";
import ArticleModel from "@/model/Article.model";
export async function POST(request: Request) {
    await dbConnect();

    try {
        const { topic, imageURL, alt, desc, link } = await request.json();

        const requiredFields = { topic, imageURL, alt, desc, link };

        for (const [field, value] of Object.entries(requiredFields)) {
            if (!value) {
                return new Response(JSON.stringify({
                    success: false,
                    message: `${field} is required`,
                }), { status: 400 });
            }
        }

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
            data: newArticle
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