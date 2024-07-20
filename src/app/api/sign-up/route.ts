import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User.model";
import bcrypt from 'bcryptjs';

export async function POST(request: Request): Promise<Response> {
    await dbConnect();

    try {
        const { username, email, password } = await request.json();

        const existingUserByUsername = await UserModel.findOne({ username });

        if (existingUserByUsername) {
            return new Response(
                JSON.stringify({ message: 'Username already exists' }),
                { status: 409 }
            );
        }

        if (password.length < 8) {
            return new Response(
                JSON.stringify({ message: 'Password must be at least 8 characters' }),
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new UserModel({
            username,
            email,
            password: hashedPassword,
        });

        await user.save();

        const createdUser = await UserModel.findOne({ username }).select('-password');

        if (!createdUser) {
            return new Response(
                JSON.stringify({
                    success: false,
                    message: 'User Creation failed',
                }),
                { status: 500 }
            );
        }

        return new Response(
            JSON.stringify({
                success: true,
                message: 'User registered successfully',
                user: createdUser,
            }),
            { status: 201 }
        );

    } catch (error) {
        return new Response(
            JSON.stringify({
                success: false,
                message: 'Error registering user',
                error,
            }),
            { status: 500 }
        );
    }
}
