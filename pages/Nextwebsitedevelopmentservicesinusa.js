import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
const Nextwebsitedevelopmentservicesinusa = () => {
    return (
        <>
            <Navbar />
            <title>  Next Website Development Services Company in USA</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="googlebot" content="noindex" />
            <meta key="robots" content="noindex" />

            <div className='Next-first-image-part'>
                <div className='container'>
                    <div className='Next-first-flex-part'>
                        <div className='Next-first-title-part'>
                            <h1>Next.js Development </h1>
                        </div>
                        <div className='Next-form-color-part'>
                            <div className='Next-form-part'>
                                <h2>Quick Contact</h2>
                                <div className='Next-form'>
                                    <input type="text" placeholder='Name*' /><br />
                                    <input type="email" placeholder='Email*' /><br />
                                    <input type="text" placeholder='Number*' /><br />
                                    <textarea type="text" placeholder='Message*' />
                                    <div className='Next-button'>
                                        <button>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}
export default Nextwebsitedevelopmentservicesinusa;