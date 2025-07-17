"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const UpdateBlog = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        id: "",   
        title: "",
        img: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/updateblog", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: Number(formData.id),
                title: formData.title,
                img: formData.img
            })
        });

        if (res.ok) {
            console.log(res);
            alert("Blog updated!");
            router.push("/homes");
        } else {
            alert("Failed to update blog.");
        }
    };

    return (
        <div className="createblog">
            <form onSubmit={handleSubmit}>
                <h1>Update Blog</h1>
                <input
                    type="number"
                    placeholder="Enter blog ID to update"
                    name="id"
                    value={formData.id}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    placeholder="New title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    placeholder="New image URL"
                    name="img"
                    value={formData.img}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateBlog;
