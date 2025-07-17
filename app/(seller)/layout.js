import Link from "next/link"

const BuyerLayout=({children})=>{
return(
    <div>
        <div>           
            <div className="navbarbuy">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbD7todrV07RtGthGBGEBLk8wDDFNsz8b2kA&s" className="logo"></img>
            <div className="navelements">
            <Link className="linktag" href={"/homes"}>home</Link>
            <Link className="linktag" href={"/createblog"}>create</Link>
            <Link className="linktag" href={"/updateblog"}>update</Link>
            <Link className="linktag" href={"/deleteblog"}>delete</Link>
            </div>
          </div>
        </div>
        {children}
    </div>
)
}

export default BuyerLayout