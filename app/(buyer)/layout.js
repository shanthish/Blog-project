import Link from "next/link"

const SellerLayout=({children})=>{
return(
    <div>
        <div>           
            <div className="navbarbuy">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbD7todrV07RtGthGBGEBLk8wDDFNsz8b2kA&s" className="logo"></img>
            <div className="navelements">
            {/* <Link href={"/homes"}>home</Link>
            <Link href={"/about"}>create</Link>
            <Link href={"/setting"}>update</Link> */}
            <p>Home</p>
            <p>about</p>
            <p>setting</p>
            </div>
          </div>
        </div>
        {children}
    </div>
)
}

export default SellerLayout;