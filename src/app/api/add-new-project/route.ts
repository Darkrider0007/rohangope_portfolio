import dbConnect from "@/lib/dbConnect";
import { userDetailsFromToken } from "@/lib/userDetailsFromToken";
import ProjectModel from "@/model/Project.model";

export async function POST(request: Request) {
    await dbConnect();
    try {
        const { name, slug, description, thumbnail, technologies, repoLink, liveLink } = await request.json();

        const getUser = await userDetailsFromToken();

        if (!getUser) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'Unauthorized',
                }),
                { status: 401 }
            );
        }

        // Check for any empty required fields
        const isFieldEmpty = [name, slug, description, thumbnail, technologies, repoLink, liveLink].some(field => !field);

        if (isFieldEmpty) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'Please fill all fields',
                }),
                { status: 400 }
            );
        }

        const projectExists = await ProjectModel.findOne({ name });

        if (projectExists) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'Project already exists',
                })
            );
        }

        // Convert the description and technologies array to string array
        const descriptionArray: string[] = [];

        for (let i = 0; i < description.length; i++) {
            descriptionArray.push(description[i].description?.trim());
        }

        const technologiesArray: string[] = [];

        for (let i = 0; i < technologies.length; i++) {
            technologiesArray.push(technologies[i].technologies?.trim());
        }

        // Create a new project
        const project = new ProjectModel({
            name,
            slug,
            description: descriptionArray,
            thumbnail,
            technologies: technologiesArray,
            repoLink,
            liveLink,
            addInTheTop: false,
        });

        if (project.repoLink === '' || project.liveLink === '') {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'Please fill all fields',
                })
            );
        }

        await project.save();

        return new Response(
            JSON.stringify({
                success: true,
                message: 'Project added successfully',
                data: project,
            }),
            { status: 201 }
        );
    } catch (error: any) {
        console.error(error);
        return new Response(
            JSON.stringify({
                success: false,
                message: 'Internal server error',
                error: error.message,
            }),
            { status: 500 }
        );
    }
}
