"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const contperpage=5;

const Homes= ()=> {
    const router = useRouter();
    const [dataset, setDataset] = useState([]);
    const [currentPage,setCurrentPage]=useState(1);

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json()).then((data) => setDataset(data)).catch((err) => console.error("Error loading JSON:", err));
    }, []);

    const totalPages=Math.ceil(dataset.length/contperpage);
    const startIndex=(currentPage-1)*contperpage;
    const items=dataset.slice(startIndex,startIndex+contperpage);

    const handleClick=(newPage) => {
        if (newPage>=1 && newPage<=totalPages) {
            setCurrentPage(newPage);
        }
    };

    return (
        <div className="container">
            <h1>Movie Blog Table</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Poster</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(({id,title,img }) => (
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>
                                <img
                                    src={img}
                                    alt={title}
                                    className="table-img"
                                    onClick={() =>
                                        router.push(`/blogdes?id=${id}&title=${title}&img=${img}`)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="pagination">
                <button onClick={() => handleClick(currentPage-1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() => handleClick(currentPage + 1)} disabled={currentPage===totalPages}
                >Next</button>
            </div>
        </div>
    );
};

export default Homes;
