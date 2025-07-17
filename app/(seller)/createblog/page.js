"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const CreateBlog = () => {
    const router = useRouter();
    const [datatopass, setDatatopass] = useState({
        id: "",
        title: "",
        img: "",
    });

    const handleChange = (event) => {
        const {name,value}=event.target;
        setDatatopass((prev)=>({...prev,[name]:name==="id"?Number(value):value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const res=await fetch("/api/createblog", {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(datatopass),
        });

        if (res.ok) {
            alert("Blog created!");
            router.push("/homes");
        } else {
            alert("Failed to create blog");
        }
    };

    return (
        <div className="createblog">
            <form onSubmit={handleSubmit}>
                <h1>Enter the details</h1>
                <input
                    type="number"
                    placeholder="Enter the ID"
                    value={datatopass.id}
                    onChange={handleChange}
                    name="id"
                    required
                />
                <input
                    type="text"
                    placeholder="Enter the title"
                    value={datatopass.title}
                    onChange={handleChange}
                    name="title"
                    required
                />
                <input
                    type="text"
                    placeholder="Enter the image URL"
                    value={datatopass.img}
                    onChange={handleChange}
                    name="img"
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default CreateBlog;
