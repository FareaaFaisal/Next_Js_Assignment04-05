import Link from "next/link"

export default function Cookies(){
    return(
     
         <div className="parentContainer">  
            
            
              <div className="childContainer slide-in-top ">   {/* 1 */}
     
                 <Link href="/cookies"><div className="imageContainer"><img src="./cookies/cookie 1.jpg" alt="Cake image" /></div>
                 <h1 className="title">Lotus Cookie</h1>
                 <p className="description">Rs. 190</p>
                 <button className="readMore">Add to Cart</button></Link>
     
              </div>
     
       
              <div className="childContainer slide-in-top">   {/* 2 */}
     
                 <Link href="/cookies"><div className="imageContainer"><img src="./cookies/cookie 2.jpg" alt="Cake image" /></div>
                 <h1 className="title">Chunkie Blend Cookie</h1>
                 <p className="description">RS. 290</p>
                 <button className="readMore">Add to Cart</button></Link>
     
              </div>
     
     
              <div className="childContainer slide-in-top">   {/* 3 */}
     
                 <Link href="/cookies"><div className="imageContainer"><img src="./cookies/cookie 3.png" alt="Cake image" /></div>
                 <h1 className="title">Triple Chocolate Cookie</h1>
                 <p className="description">Rs. 340 </p>
                 <button className="readMore">Add to Cart</button></Link>
     
              </div>
     
     
              <div className="childContainer slide-in-top">   {/* 4 */}
     
                 <Link href="/cookies"><div className="imageContainer"><img src="./cookies/cookie 4.png" alt="Cake image" /></div>
                 <h1 className="title">Nutella Filled Cookie</h1>
                 <p className="description">Rs. 250</p>
                 <button className="readMore">Add to Cart</button></Link>
     
              </div>
     
     
              <div className="childContainer slide-in-top">   {/* 5 */}
     
                 <Link href="/cookies"><div className="imageContainer"><img src="./cookies/cookie 5.png" alt="Cake image" /></div>
                 <h1 className="title">Red Velvet Cookie</h1>
                 <p className="description">Rs. 320</p>
                 <button className="readMore">Add to Cart</button></Link>
     
              </div>
     
     
              <div className="childContainer slide-in-top">   {/* 6 */}
     
                 <Link href="cookies"><div className="imageContainer"><img src="./cookies/cookie 6.png" alt="Cake image" /></div>
                 <h1 className="title">White Fudge Cookie</h1>
                 <p className="description">Rs. 170</p>
                 <button className="readMore">Add to Cart</button></Link>
     
              </div>
     </div>
         )
     }
   
    