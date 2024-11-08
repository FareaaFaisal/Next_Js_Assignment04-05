import Link from "next/link"

export default function Cake(){
    return(

    <div className="parentContainer">  
       
         <div className="childContainer slide-in-top ">   {/* 1 */}

            <Link href="/cakes"><div className="imageContainer"><img src="./cakes page/cake 4.png" alt="Cake image" /></div>
            <h1 className="title">Three Milk Cake</h1>
            <p className="description">Rs. 1990<br/>
            Vanilla Sponge Cake in Three Kind of Milk; Whole Milk, Evaporated Milk and Condensed Milk!</p>
            <button className="readMore">Add to Cart</button></Link>

         </div>

  
         <div className="childContainer slide-in-top">   {/* 2 */}

            <Link href="/cookies"><div className="imageContainer"><img src="./cakes page/cake 2.png" alt="Cake image" /></div>
            <h1 className="title">KitKat Cake</h1>
            <p className="description">RS. 1990<br/>Made With Imported Chocolate with KitKat Wafers!</p>
            <button className="readMore">Add to Cart</button></Link>

         </div>


         <div className="childContainer slide-in-top">   {/* 3 */}

            <Link href="/brownies"><div className="imageContainer"><img src="./cakes page/cake 3.png" alt="Cake image" /></div>
            <h1 className="title">Chocolate Mousse Cake</h1>
            <p className="description">Rs. 1450<br/>The Lightest Chocolate Cake In Town That Will Have You Floating

</p>
            <button className="readMore">Add to Cart</button></Link>

         </div>


         <div className="childContainer slide-in-top">   {/* 4 */}

            <Link href="/donuts"><div className="imageContainer"><img src="./cakes page/cake 1.png" alt="Cake image" /></div>
            <h1 className="title">Nutella Cake</h1>
            <p className="description">Rs. 2050<br/>A Guilty Pleasure That You Won't Be Able To Resist! Made From Nutella & Imported Cream!</p>
            <button className="readMore">Add to Cart</button></Link>

         </div>


         <div className="childContainer slide-in-top">   {/* 5 */}

            <Link href="/cupcakes"><div className="imageContainer"><img src="./cakes page/cake 5.png" alt="Cake image" /></div>
            <h1 className="title">Coffee Cake</h1>
            <p className="description">Rs. 1750<br/>
Light Crème Cheese Icing With A 'Sweet Sense Of Coffee' 


medium</p>
            <button className="readMore">Add to Cart</button></Link>

         </div>


         <div className="childContainer slide-in-top">   {/* 6 */}

            <Link href="sundae"><div className="imageContainer"><img src="./cakes page/cake 6.png" alt="Cake image" /></div>
            <h1 className="title">German Fudge Cake</h1>
            <p className="description">Rs. 1700<br/>
            Authentic Fudge So Light That It Will Melt Your Heart!</p>
            <button className="readMore">Add to Cart</button></Link>

         </div>
</div>
    )
}