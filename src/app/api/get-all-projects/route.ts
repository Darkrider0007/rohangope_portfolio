import dbConnect from "@/lib/dbConnect";
import ProjectModel from "@/model/Project.model";

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


        return new Response(JSON.stringify({
            success: true,
            message: 'Projects found',
            data: projects
        }), { status: 200 });
    } catch (error: any) {
        return new Response(JSON.stringify({
            success: false,
            message: 'Internal server error',
            error: error.message
        }), { status: 500 });
    }
}
