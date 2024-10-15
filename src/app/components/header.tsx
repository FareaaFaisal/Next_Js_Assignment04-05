import Image from 'next/image';
import Link from "next/link";

export default function Header() {
    return (
        <div className="header">
              <div className="logo-site-container">
                          <div className="logo">
                                    <Image 
                                        src="/logotry3-removebg-preview.png" 
                                        alt="web page" 
                                        width={100} 
                                        height={100}
                                    />
                          </div>

            <h1 className='page-name'><span>𝓕</span>𝘳𝘰𝘴𝘵𝘦𝘥 &nbsp; <span>𝓓</span>𝘳𝘦𝘢𝘮𝘴</h1>
              </div>

            <ul className="header-button">
                <li><Link href="/"><strong>Home</strong></Link></li>
                <li><Link href="/about-us"><strong>About Us</strong></Link></li>
                <li><Link href="/contact-us"><strong>Contact Us</strong></Link></li>
                <li><Link href="/our-branches"><strong>Our Branches</strong></Link></li>
            </ul>
        </div>
    );
}


