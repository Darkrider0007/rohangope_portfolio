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
    name: z.string().nonempty("Name is required"),
    slug: z.string().nonempty("Slug is required"),
    description: z.array(z.object({
        description: z.string().nonempty("Description is required")
    })),
    thumbnail: z.string().url("Thumbnail must be a valid URL"),
    technologies: z.array(z.object({
        technologies: z.string().nonempty("Technology is required")
    })),
    repoLink: z.string().url("Repo Link must be a valid URL"),
    liveLink: z.string(),
});

type FormData = z.infer<typeof formSchema>;
function AddProject() {
    const [isbuttonClicked, setButtonClicked] = useState(false);

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            slug: "",
            description: [{ description: "" }],
            thumbnail: "",
            technologies: [{ technologies: "" }],
            repoLink: "",
            liveLink: "",
        },
    });

    const { control, handleSubmit } = form;

    const { fields: descriptionFields, append: appendDescription, remove: removeDescription } = useFieldArray({
        control,
        name: "description",
    });

    const { fields: technologyFields, append: appendTechnology, remove: removeTechnology } = useFieldArray({
        control,
        name: "technologies",
    });

    const { toast } = useToast();
    const router = useRouter();

    async function onSubmit(values: FormData) {
        setButtonClicked(true);
        try {
            const res = await axios.post('/api/add-new-project', values);
            if (res.data.success) {
                toast({
                    title: 'Project added successfully',
                    description: 'You have successfully added a new project',
                });
                router.push('/');
            } else {
                toast({
                    title: 'Project not added',
                    description: res.data.message,
                    variant: "destructive"
                });
            }

        } catch (error) {
            toast({
                title: 'An error occurred',
                description: 'An error occurred while adding a new project',
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
                    <CardTitle className="text-xl font-semibold">Add New Project</CardTitle>
                    <CardDescription>Fill in the details to add a new project.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <FormField
                                control={control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Project Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="slug"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Slug</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Project Slug" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {descriptionFields.map((field, index) => (
                                <FormField
                                    key={field.id}
                                    control={control}
                                    name={`description.${index}.description`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Description</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Project Description" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                            <button
                                                type="button"
                                                onClick={() => removeDescription(index)}
                                                className="mt-2 text-red-500"
                                            >
                                                Remove
                                            </button>
                                        </FormItem>
                                    )}
                                />
                            ))}
                            <button
                                type="button"
                                onClick={() => appendDescription({ description: "" })}
                                className="mt-4 text-blue-500"
                            >
                                Add New Description
                            </button>
                            <FormField
                                control={control}
                                name="thumbnail"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Thumbnail</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Thumbnail URL" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            {technologyFields.map((field, index) => (
                                <FormField
                                    key={field.id}
                                    control={control}
                                    name={`technologies.${index}.technologies`}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Technology</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Technology" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                            <button
                                                type="button"
                                                onClick={() => removeTechnology(index)}
                                                className="mt-2 text-red-500"
                                            >
                                                Remove
                                            </button>
                                        </FormItem>
                                    )}
                                />
                            ))}
                            <button
                                type="button"
                                onClick={() => appendTechnology({ technologies: "" })}
                                className="mt-4 text-blue-500"
                            >
                                Add New Technology
                            </button>
                            <FormField
                                control={control}
                                name="repoLink"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Repository Link</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Repository Link" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="liveLink"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Live Link</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Live Link" {...field} />
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
                                            <Loader2 className="animate-spin mr-2" /> Adding Project...
                                        </>
                                        : 'Add Project'}
                                </Button>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default AddProject