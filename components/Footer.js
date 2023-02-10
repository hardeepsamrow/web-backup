/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
    return (
        <>
            {/* {/ footer /} */}
            <div className="contact_icon">
                <Link
                    href="https://wa.me/1234567890">
                    <img
                        src="./whatsapp.png"
                        alt="" />
                </Link>
                <Link
                    href="tel:+1(209)226-445">
                    <img
                        className="call"
                        src="./phone_call.png"
                        alt="" />
                </Link>
            </div>
            <div className='Footer-color-part'>
                <div className='container'>
                    <div className='Footer-first-flex-part'>
                        <div className='Footer-first-part'>
                            <h2>Wordpress Web Development</h2>
                            <p></p>
                        </div>
                        <div className='Footer-second-part'>
                            <h2>Our Services</h2>
                            <ul>
                                <li><Link href="">Wordpress Web Development</Link></li>
                                <li><Link href="">Shopify web development</Link></li>
                                <li><Link href="">React.js</Link></li>
                                <li><Link href="">Next.js</Link></li>
                                <li><Link href="">Node.js</Link></li>
                                <li><Link href="">Wix</Link></li>
                                <li><Link href="">Kajabi</Link></li>
                            </ul>
                        </div>
                        <div className='Footer-three-part'>
                            <h2>Address</h2>
                            <p>Plot no – 252, Phase 8b, Sec -74, Mohali</p>
                            <h6>Phone:</h6>
                            <p>62840-76970
                                9592324423, 9781545794</p>
                            <h6>Email:</h6>
                            <p>example@gmail.com</p>
                            <p>
                                <Link href="">Sitemap</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;