import dbConnect from "@/lib/dbConnect";
import ArticleModel from "@/model/Article.model";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
    await dbConnect();

    try {
        const articles = await ArticleModel.find();

        if (!articles) {
            return NextResponse.json({
                success: false,
                message: 'No articles found'
            });
        }


        return NextResponse.json({
            success: true,
            message: 'Articles fetched successfully',
            data: articles
        }, { status: 200 })
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: error.message
        },
            {
                status: 500
            }
        );
    }
}
