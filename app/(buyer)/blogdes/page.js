"use client";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const blogdes = () => {
  const searchParams=useSearchParams();
  const id=searchParams.get("id");
  const title=searchParams.get("title");
  const img=searchParams.get("img");

  return (
    <div className="blogid container">
      <div className="blogid-left">
        <img src={img} alt={title} className="blogidimg1" />
        <h2 className="blog-title"> {title}</h2>
        <p className="blog-id">ID: {id}</p>
      </div>

      <div className="blogid-right">
        <h1 className="blog-heading">About the Movie</h1>
        <p>
          Paramount+ is a streaming platform by Paramount Pictures that brings a broad selection of entertainment. 
          From the latest theatrical releases to nostalgic classics, it has become a go-to platform for movie lovers.
        </p>
        <p>
          The platform also features exclusive originals, catering to diverse genres including action, drama, comedy, 
          sci-fi, and documentaries. Whether you're revisiting old favorites or exploring new stories, there's something for everyone.
        </p>
        <p>
          One standout feature of Paramount+ is its offline viewing support. Subscribers can download select movies 
          and TV shows to watch anytime, anywhere  perfect for travel or areas with limited connectivity.
        </p>
        <p>
          With partnerships and a growing content library, Paramount+ continues to evolve as a competitive player 
          in the streaming industry, offering both entertainment and convenience in one place.
        </p>
      </div>
    </div>
  );
};

export default blogdes;
