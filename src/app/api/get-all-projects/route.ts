import dbConnect from "@/lib/dbConnect";
import ProjectModel from "@/model/Project.model";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
    await dbConnect();

    try {
        const projects = await ProjectModel.find();

        if (!projects) {
            return new Response(JSON.stringify({
                success: false,
                message: 'No projects found'
            }), { status: 404 });
        }


        return NextResponse.json({
            success: true,
            message: 'Projects fetched successfully',
            data: projects
        })
    } catch (error: any) {
        return new Response(JSON.stringify({
            success: false,
            message: 'Internal server error',
            error: error.message
        }), { status: 500 });
    }
}
