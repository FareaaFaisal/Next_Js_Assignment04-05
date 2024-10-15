// import Header from "@/app/components/header"
// import {Footer} from "@/app/components/footer"

import Image from "next/image";
import Link from "next/link"

export default function Branches(){
    return(
        <div>
            {/* <Header/> */}
            <br/><br/><br/><br/>
                <h1 className="font-bold text-4xl text-black-900 text-center uppercase underline">Our Branches<br/></h1><br/>


<div className="flex space-x-4 gap-x-9 p-7 ">
<div className="border border-gray-300 p-2"><Image src="/chef1.png" alt="Chef Image" width={200}  height={200} /></div></div>
            {/* <Footer/> */}
        </div>
     
    );
};