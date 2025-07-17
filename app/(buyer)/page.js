"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const DefaultPage = () => {
    const router = useRouter();
    const [dataset, setDataset] = useState([]);



    useEffect(() => {
        fetch("/data.json") .then((res) => res.json()).then((data) => setDataset(data)).catch((err) => console.error("Error loading JSON:", err));
    }, [dataset]);



    return (
        <>
            <h1>Blog on movies</h1>
            <div className="blogpage">
                {dataset.map(({ id, title, img,description }) => (
                    <div key={id} className="blogcards">
                        <img
                            src={img}
                            className="blogimg"
                            alt={title}
                            onClick={() =>
                                router.push(`/blogdes?id=${id}&title=${title}&img=${img}`)}
                        />
                        <h2>{title}</h2>
                        <p>{description}</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default DefaultPage;
