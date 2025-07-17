"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const DeleteBlog = () => {
    const [idToDelete, setIdToDelete] = useState("");
    const router = useRouter();

    const handleDelete = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/deleteblog", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: Number(idToDelete) })
        });

        if (res.ok) {
            alert("Blog deleted!");
            router.push("/homes");
        } else {
            const err = await res.json();
            alert("Error: " + err.error);
        }
    };

    return (
        <div className="createblog">
            <form onSubmit={handleDelete}>
                <h1>Delete Blog</h1>
                <input
                    type="text"
                    placeholder="Enter blog ID to delete"
                    value={idToDelete}
                    onChange={(e) => setIdToDelete(e.target.value)}
                    required
                />
                <button type="submit">Delete</button>
            </form>
        </div>
    );
};

export default DeleteBlog;
