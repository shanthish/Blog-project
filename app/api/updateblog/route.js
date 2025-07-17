import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function PUT(request) {
    try {
        const updatedBlog=await request.json();

        const filePath=path.join(process.cwd(),"public","data.json");
        const fileData=fs.readFileSync(filePath,"utf-8");
        const blogs=JSON.parse(fileData);

        const index=blogs.findIndex((blog)=>blog.id===updatedBlog.id);
        if (index===-1) {
            return NextResponse.json({error:"Blog not found"},{status: 404});
        }

        blogs[index]={...blogs[index], ...updatedBlog};
        fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2));

        return NextResponse.json({message:"Blog updated successfully!"});
    } catch (error) {
        return NextResponse.json({error:"Internal Server Error"},{status: 500});
    }
}
