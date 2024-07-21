import dbConnect from "@/lib/dbConnect";
import ProjectModel from "@/model/Project.model";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
    await dbConnect();

    try {
        const projects = await ProjectModel.find();

        if (!projects) {
            return NextResponse.json({
                success: false,
                message: 'No projects found'
            });
        }


        return NextResponse.json({
            success: true,
            message: 'Projects fetched successfully',
            data: projects
        })
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
