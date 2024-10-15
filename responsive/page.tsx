import Link from "next/link";
// import Cake from "@/app/cakes/page.tsx"

export default function Responsive() {
    return(
     
 <div className="parentContainer">  

         <div className="childContainer slide-in-top">   {/* 1 */}

            <Link href="/cakes"><div className="imageContainer"><img src="/cakecover.png" alt="Cake image" /></div>
            <h1 className="title">CAKES</h1>
            <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button className="readMore">View More</button></Link>

         </div>

  
         <div className="childContainer slide-in-top">   {/* 2 */}

            <Link href="/cookies"><div className="imageContainer"><img src="/cookiescover.png" alt="Cake image" /></div>
            <h1 className="title">COOKIES</h1>
            <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button className="readMore">View More</button></Link>

         </div>


         <div className="childContainer slide-in-top">   {/* 3 */}

            <Link href="/brownies"><div className="imageContainer"><img src="/browniescover.png" alt="Cake image" /></div>
            <h1 className="title">BROWNIES</h1>
            <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button className="readMore">View More</button></Link>

         </div>


         <div className="childContainer slide-in-top">   {/* 4 */}

            <Link href="/donuts"><div className="imageContainer"><img src="/donutscover.png" alt="Cake image" /></div>
            <h1 className="title">DONUTS</h1>
            <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button className="readMore">View More</button></Link>

         </div>


         <div className="childContainer slide-in-top">   {/* 5 */}

            <Link href="/cupcakes"><div className="imageContainer"><img src="/cupcakescover.png" alt="Cake image" /></div>
            <h1 className="title">CUPCAKES</h1>
            <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button className="readMore">View More</button></Link>

         </div>


         <div className="childContainer slide-in-top">   {/* 6 */}

            <Link href="sundae"><div className="imageContainer"><img src="/sundaecover.png" alt="Cake image" /></div>
            <h1 className="title">SUNDAES</h1>
            <p className="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <button className="readMore">View More</button></Link>

         </div>
</div>

    );
};

//--------------------------------------------
