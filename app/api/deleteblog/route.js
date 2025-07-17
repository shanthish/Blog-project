import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function DELETE(request) {
    try {
        const {id}=await request.json();

        const filePath=path.join(process.cwd(),"public","data.json");
        const fileData=fs.readFileSync(filePath,"utf-8");
        let blogs=JSON.parse(fileData);

        const index=blogs.findIndex((blog)=>blog.id===id);
        if (index===-1) {
            return NextResponse.json({error:"Blog not found"},{status:404});
        }

        blogs.splice(index,1);
        fs.writeFileSync(filePath, JSON.stringify(blogs,null,2));
        
        return NextResponse.json({message:"Blog deleted successfully!"});
    } catch (error) {
        return NextResponse.json({error:"Internal Server Error"},{status:500});
    }
}
