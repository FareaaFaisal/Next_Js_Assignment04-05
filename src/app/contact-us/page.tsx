// import Header from "@/app/components/header"
// import {Footer} from "@/app/components/footer"

import Image from "next/image";
import Link from "next/link"

export default function Contact(){
    return(
        <div>
            {/* <Header/>            //  imported header and footer in layout file */}
            <br/><br/><br/><br/>
<h1 className="font-bold text-4xl text-black-900 text-center uppercase underline">Contact  Us<br/></h1><br/>


<div className="flex space-x-4 gap-x-9 p-7 ">
<div className="border border-gray-300 p-2"><Image src="/chef1.png" alt="Chef Image" width={200}  height={200} /></div>
<div className="font-bold text-xl leading-tight text-black-100  underline">
        <p className="leading-relaxed mb-2">PHONE NUMBER:- 0300 3333333<br/></p>
        <p className="leading-relaxed mb-2">PTCL NUMBER: 033333333</p>
        <p className="leading-relaxed mb-2">EMAIL AT: FrostedDreams@gmail.com</p>
        <p className="leading-relaxed mb-2">FOLLOW US ON INSTAGRAM: @FrostedDreams</p>
</div>
</div>
          
      </div>
       
    );
};