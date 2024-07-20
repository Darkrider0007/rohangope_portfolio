import dbConnect from "@/lib/dbConnect";
import ProjectModel from "@/model/Project.model";

export async function GET(request: Request) {
    await dbConnect();

    try {
        const { searchParams } = new URL(request.url);

        const id = searchParams.get('id');
        console.log(id);

        if (!id) {
            return new Response(JSON.stringify({
                success: false,
                message: 'ID is required'
            }), { status: 400 });
        }
        const project = await ProjectModel.find({ _id: id });

        if (!project) {
            return new Response(JSON.stringify({
                success: false,
                message: 'No projects found'
            }), { status: 404 });
        }

        return new Response(JSON.stringify({
            success: true,
            message: 'Projects found',
            project: project[0]
        }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({
            success: false,
            message: 'Internal server error',
            error: error
        }), { status: 500 });
    }
}