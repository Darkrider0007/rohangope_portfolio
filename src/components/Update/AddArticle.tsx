"use client";
import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from '../ui/use-toast';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
    topic: z.string().nonempty("Name is required"),
    imageURL: z.string().url("Thumbnail must be a valid URL"),
    alt: z.string().nonempty("Slug is required"),
    desc: z.string().nonempty("Repo Link must be a valid URL"),
    link: z.string().url("Link must be a valid URL"),
});

type FormData = z.infer<typeof formSchema>;
function AddArticle() {
    const [isbuttonClicked, setButtonClicked] = useState(false);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            topic: "",
            imageURL: "",
            alt: "",
            desc: "",
            link: "",
        },
    });

    const { control, handleSubmit } = form;
    const { toast } = useToast();
    const router = useRouter();

    async function onSubmit(values: FormData) {
        setButtonClicked(true);
        try {
            const res = await axios.post('/api/add-new-article', values);
            if (res.data.success) {
                toast({
                    title: 'Article added successfully',
                    description: 'You have successfully added a new article',
                });
                // router.push('/');
            } else {
                toast({
                    title: 'Article not added',
                    description: res.data.message,
                    variant: "destructive"
                });
            }

        } catch (error) {
            toast({
                title: 'An error occurred',
                description: 'An error occurred while adding a new article',
                variant: "destructive"
            });
        } finally {
            setButtonClicked(false);
        }
    }
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl font-semibold">Add New Article</CardTitle>
                    <CardDescription>
                        Fill the form below to add a new article to the list of articles.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={control}
                                name="topic"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Topic</FormLabel>
                                        <FormControl>
                                            <Input placeholder="topic Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="imageURL"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Image URL</FormLabel>
                                        <FormControl>
                                            <Input placeholder="image url" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={control}
                                name="alt"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Alternative for the Image</FormLabel>
                                        <FormControl>
                                            <Input placeholder="alt for image" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="desc"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Description</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Description" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="link"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Article Link</FormLabel>
                                        <FormControl>
                                            <Input placeholder="article link" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex justify-center ">
                                <Button type="submit"
                                    disabled={isbuttonClicked}
                                >
                                    {isbuttonClicked ?
                                        <>
                                            <Loader2 className="animate-spin mr-2" /> Adding Article...
                                        </>
                                        : 'Add Article'}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default AddArticle