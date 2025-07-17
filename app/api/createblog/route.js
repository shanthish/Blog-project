import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request) {
    const newBlog = await request.json();

    const filePath = path.join(process.cwd(), "public", "data.json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    // this line i used to get data from the data.json file
    const blogs = JSON.parse(fileData);
    // converts the string file data to json
    blogs.push(newBlog);

    fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2));
    //   JSON.stringify(value, replacer, space)
    //  value=blogs, replacer = selects what are all the things to be included in the file. Here we gave null because i dont want to filter anything.I just want to upload the object completely

    return NextResponse.json({ message: "Blog added successfully!"});
}






