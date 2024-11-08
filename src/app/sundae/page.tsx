import Link from "next/link"

export default function Sundae(){
    return(
    
      <div className="parentContainer">  
     
     
       <div className="childContainer slide-in-top ">   {/* 1 */}

          <Link href="/sundaes"><div className="imageContainer"><img src="./sundaes page/sundae 1.png" alt="Sundae image" /></div>
          <h1 className="title">Nutella Sundae</h1>
          <p className="description">Rs. 370</p>
          <button className="readMore">Add to Cart</button></Link>

       </div>


       <div className="childContainer slide-in-top">   {/* 2 */}

          <Link href="/sundaes"><div className="imageContainer"><img src="./sundaes page/sundae 2.png" alt="Sundae image" /></div>
          <h1 className="title">Three Milk Sundae</h1>
          <p className="description">RS. 370</p>
          <button className="readMore">Add to Cart</button></Link>

       </div>


       <div className="childContainer slide-in-top">   {/* 3 */}

          <Link href="/sundaes"><div className="imageContainer"><img src="./sundaes page/sundae 3.png" alt="Sundae image" /></div>
          <h1 className="title">Galaxy Sundae</h1>
          <p className="description">Rs. 370 </p>
          <button className="readMore">Add to Cart</button></Link>

       </div>


       <div className="childContainer slide-in-top">   {/* 4 */}

          <Link href="/sundaes"><div className="imageContainer"><img src="./sundaes page/sundae 4.png" alt="Sundae image" /></div>
          <h1 className="title">Lotus Biscoff Sundae</h1>
          <p className="description">Rs. 370</p>
          <button className="readMore">Add to Cart</button></Link>

       </div>


       <div className="childContainer slide-in-top">   {/* 5 */}

          <Link href="/sundaes"><div className="imageContainer"><img src="./sundaes page/sundae 5.png" alt="Sundae image" /></div>
          <h1 className="title">Red Velvet Sundae</h1>
          <p className="description">Rs. 370</p>
          <button className="readMore">Add to Cart</button></Link>

       </div>


       <div className="childContainer slide-in-top">   {/* 6 */}

          <Link href="/sundaes"><div className="imageContainer"><img src="./sundaes page/sundae 6.png" alt="Sundae image" /></div>
          <h1 className="title">Coffee Sundae</h1>
          <p className="description">Rs. 370</p>
          <button className="readMore">Add to Cart</button></Link>

       </div>
</div>
    )
}