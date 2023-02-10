import Image from 'next/image'
import { AiOutlineStar ,AiOutlineMail} from "react-icons/ai";
import Link from 'next/link'
import { useState } from 'react';
import { FaPhoneAlt  } from "react-icons/fa";
const Navbar = () => {
    const [one, setOne] = useState()

    const handleone = () => {
        setOne(!one)

    }
    return (
        <>
            {/* <div className='Navbar-first-color-part'>
                <div className='container'>
                    <div className='Navbar-first-flex-part'>
                        <div className='Navbar-second-title-part'>
                            <Link href="tel:+1(209)226-445"><FaPhoneAlt />+1(209)226-445</Link>
                             <Link href=""><AiOutlineMail />example@gmail.com</Link> 
                        </div>
                    </div>
                </div>
            </div> */}
            <nav>
               <div className='Header'>
                <div className='Navbar-color'>
                    <div className='container'>
                        <div className='Navbar-flex-part'>
                            <input type="checkbox" id="nav-toggle" />
                            {/* <div className="logo"><Link href="/"><strong>  Coalition  Technologies</strong></Link> </div> */}
                            <div className='logo'><Link href="/"><Image src="/weblogo.png" width="50" height="50" alt="Web Development" /></Link></div>
                            <ul className="links">
                                <li><Link href="/">Home</Link></li>
                                <li><Link href="">Web Design </Link></li>
                                <li><Link href="">SEO </Link></li>
                                <div className='Dropdown'>
                                    <li><Link href="">Services</Link></li>
                                    <div class="dropdown-content">
                                        <div className='dropdown-flex-part'>
                                            <div className='dropdown-first-part'>
                                                <ul>
                                                    <h4>Services</h4>
                                                    <li><Link href="/Wordpresswebsitedevelopmentservicesinusa">Web Development</Link></li>
                                                    <li><Link href="">Web App Development</Link></li>
                                                    <li><Link href="">E-Commerce Development</Link></li>
                                                    <li><Link href="">Wordpress Development</Link></li>
                                                    <li><Link href="">Magento Development</Link></li>
                                                    <li><Link href="">IT Staff Augmentation</Link></li>
                                                </ul>
                                            </div>
                                            <div className='dropdown-first-part'>
                                                <ul>
                                                    <h4>Technologies</h4>
                                                    <li><Link href="">Laravel Development</Link></li>
                                                    <li><Link href="/Reactwebsitedevelopmentservicesinusa">React.js Development</Link></li>
                                                    <li><Link href="">Node.js Development</Link></li>
                                                    <li><Link href="">Flutter App Development</Link></li>
                                                    <li><Link href="">React Native Development</Link></li>
                                                    <li><Link href="">MEAN Stack Development</Link></li>
                                                </ul>
                                            </div>
                                            <div className='dropdown-first-part'>
                                                <ul>
                                                    <h4>Web/Mobile Apps</h4>
                                                    <li><Link href="">Android App Development</Link></li>
                                                    <li><Link href="">iOS App Development</Link></li>
                                                    <li><Link href="">HealthCare App Development</Link></li>
                                                    <li><Link href="">Grocery App Development</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <li><Link href="/Portfoliowebsitedevelopmentservicesinusa">Portfolio</Link></li>
                                <li><Link href="/Contactwebsitedevelopmentservicesinusa">Contact Us</Link></li>
                                <li><Link href="">Blog</Link></li>
                            </ul>
                            <label for="nav-toggle" class="icon-burger">
                                <div className="line"></div>
                                <div className="line"></div>
                                <div className="line"></div>
                            </label>
                        </div>
                    </div>
                </div>
                </div>
            </nav>
            <label for="nav-toggle" class="icon-burger">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </label>
        </>
    )
}

export default Navbar

