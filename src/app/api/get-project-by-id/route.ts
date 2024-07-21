import dbConnect from "@/lib/dbConnect";
import ProjectModel from "@/model/Project.model";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request: Request) {
    await dbConnect();

    try {
        const { searchParams } = new URL(request.url);

        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json({
                success: false,
                message: 'No project id found'
            }, { status: 400 });
        }
        const project = await ProjectModel.find({ _id: id });

        if (!project) {
            return NextResponse.json({
                success: false,
                message: 'No project found'
            }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            message: 'Project fetched successfully',
            data: project
        },
            {
                status: 200
            }
        );
    } catch (error: any) {
        return NextResponse.json({
            success: false,
            message: error.message
        }, { status: 500 });
    }
}