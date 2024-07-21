"use client";

import AddArticle from "@/components/Update/AddArticle";
import AddProject from "@/components/Update/AddProject";


function Page() {


    return (
        <div className="container mx-auto mt-16 px-4 flex flex-col gap-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Add Projects and Articles</h1>
            <AddProject />
            <AddArticle />
        </div>
    );
}

export default Page;
