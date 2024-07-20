'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { signInSchema } from '@/schemas/signInSchema';
import axios from 'axios';
import { z } from 'zod';
import { useState } from 'react';

export default function SignInForm() {
    const router = useRouter();
    const params = useParams<{ code: string }>();
    const [isbuttonClicked, setButtonClicked] = useState(false);

    const form = useForm<z.infer<typeof signInSchema>>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const { toast } = useToast();

    const onSubmit = async (data: any) => {
        setButtonClicked(true);
        try {
            const result = await axios.post('/api/sign-in', data,
                {
                    withCredentials: true
                }
            );
            if (result.data.success) {
                toast({
                    title: 'Sign in successful',
                    description: 'You have successfully signed in',
                });
                router.push('/update');
            }

        } catch (error) {
            console.error(error);
        } finally {
            setButtonClicked(false);
        }
    };

    if (params.code != "darkrider007_2login") {
        router.push('/error');
    } else
        return (
            <div className="flex justify-center items-center min-h-screen ">
                <div className="w-full max-w-md p-8 space-y-8 b-2 bg-primary-foreground rounded-lg shadow-md">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
                            Sign In to your account
                        </h1>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                name="username"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <Input {...field} />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                name="password"
                                control={form.control}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <Input type="password" {...field} />
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            {
                                isbuttonClicked ?
                                    <Button type="submit" disabled={true} className="w-full">
                                        Signin In...
                                    </Button> :
                                    <Button type="submit" className="w-full">
                                        Sign In
                                    </Button>
                            }
                        </form>
                    </Form>

                </div>
            </div>
        );
}