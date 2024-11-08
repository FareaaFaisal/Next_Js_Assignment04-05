import Link from "next/link"

export default function Donuts(){
    return(
      <div className="parentContainer">  
     
       <div className="childContainer slide-in-top ">   {/* 1 */}

          <Link href="/donuts"><div className="imageContainer"><img src="./donuts page/donut 1.png" alt="Donut image" /></div>
          <h1 className="title">Box Of 6 Donuts</h1>
          <p className="description">Rs. 1450</p>
          <button className="readMore">Add to Cart</button></Link>

       </div>


       <div className="childContainer slide-in-top">   {/* 2 */}

          <Link href="/donuts"><div className="imageContainer"><img src="./donuts page/donut 2.png" alt="Donut image" /></div>
          <h1 className="title">Ferredo Donut</h1>
          <p className="description">RS. 270</p>
          <button className="readMore">Add to Cart</button></Link>

       </div>


       <div className="childContainer slide-in-top">   {/* 3 */}

          <Link href="/donuts"><div className="imageContainer"><img src="./donuts page/donut 3.png" alt="Donut image" /></div>
          <h1 className="title">Belgian Dream Donut</h1>
          <p className="description">Rs. 210</p>
          <button className="readMore">Add to Cart</button></Link>

       </div>


       <div className="childContainer slide-in-top">   {/* 4 */}

          <Link href="/donuts"><div className="imageContainer"><img src="./donuts page/donut 4.png" alt="Donut image" /></div>
          <h1 className="title">Velvet creme Donut</h1>
          <p className="description">Rs. 350</p>
          <button className="readMore">Add to Cart</button></Link>

       </div>


       <div className="childContainer slide-in-top">   {/* 5 */}

          <Link href="/donuts"><div className="imageContainer"><img src="./donuts page/donut 5.png" alt="Donut image" /></div>
          <h1 className="title">Good OL Chocolate Donut</h1>
          <p className="description">Rs. 270</p>
          <button className="readMore">Add to Cart</button></Link>

       </div>


       <div className="childContainer slide-in-top">   {/* 6 */}

          <Link href="/donuts"><div className="imageContainer"><img src="./donuts page/donut 6.png" alt="Donut image" /></div>
          <h1 className="title">Chocolate Madness Donut</h1>
          <p className="description">Rs. 370<br/>The Dark Crème Swiss Chocolate Frosting is a love like no other!</p>
          <button className="readMore">Add to Cart</button></Link>
          </div>
          </div>
    )
}