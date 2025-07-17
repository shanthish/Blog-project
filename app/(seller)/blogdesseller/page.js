"use client";
import { useSearchParams } from "next/navigation";

const BlogDesseller = () => {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const title = searchParams.get("title");
    const img = searchParams.get("img");

    return (
        <>
            <div className="blogid">
                <div className="left">
                    <img src={img} className="blogidimg1" />
                    <h1>Title: {title}</h1>
                    <h1>Id: {id}</h1>
                </div>
                <div className="right">
                    <h1>Description</h1>
                    <p>
                        Para movies likely refers to movies available on Paramount+, a streaming
                        service owned by Paramount Pictures. It offers a wide range of films,
                        including theatrical releases, originals, and classic titles. Paramount+
                        also allows for downloads of some movies and shows for offline viewing
                        according to Paramount Plus.
                    </p>
                    <p>
                        Para movies likely refers to movies available on Paramount+, a streaming
                        service owned by Paramount Pictures. It offers a wide range of films,
                        including theatrical releases, originals, and classic titles. Paramount+
                        also allows for downloads of some movies and shows for offline viewing
                        according to Paramount Plus.
                    </p>
                    <p>
                        Para movies likely refers to movies available on Paramount+, a streaming
                        service owned by Paramount Pictures. It offers a wide range of films,
                        including theatrical releases, originals, and classic titles. Paramount+
                        also allows for downloads of some movies and shows for offline viewing
                        according to Paramount Plus.
                    </p>
                    <p>
                        Para movies likely refers to movies available on Paramount+, a streaming
                        service owned by Paramount Pictures. It offers a wide range of films,
                        including theatrical releases, originals, and classic titles. Paramount+
                        also allows for downloads of some movies and shows for offline viewing
                        according to Paramount Plus.
                    </p>
                </div>
            </div>
        </>
    );
};

export default BlogDesseller;
