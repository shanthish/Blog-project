'use client';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

const BlogDes = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const title = searchParams.get('title');
  const img = searchParams.get('img');

  return (
    <div className="blogid container">
      <div className="blogid-left">
        <Image
          src={img || "/fallback.jpg"}
          alt={title || "Blog Image"}
          className="blogidimg1"
          width={600}
          height={400}
        />
        <h2 className="blog-title">{title}</h2>
        <p className="blog-id">ID: {id}</p>
      </div>

      <div className="blogid-right">
        <h1 className="blog-heading">About the Movie</h1>
        <p>
          Paramount+ is a streaming platform by Paramount Pictures that brings a broad selection of entertainment...
        </p>
      </div>
    </div>
  );
};

export default BlogDes;
