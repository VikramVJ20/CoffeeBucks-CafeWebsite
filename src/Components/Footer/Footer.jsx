import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa6'
import FooterBg from '../../assets/Background2.jpg'


const FooterLinks = [
    {
        title: "Home",
        link: "/#"
    },
    {
        title: "About",
        link: "/#about"
    },
    {
        title: "Contact",
        link: "/#contact"
    },
    {
        title: "Blog",
        link: "/#blog"
    },
]
const bgImage ={
    backgroundImage: `url(${FooterBg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    minHeight: "400px",
    width: "100%",
}

const Footer = () => {
  return (
    <div style={bgImage} className='text-white'>
        <div className=" bg-black/40 min-h-[400px]">
            <div className="container grid md:grid-cols-3 pb-20 pt-5">
                {/* company details */}
                <div className='py-8 px-4'>
                    <a href="#" className='font-semibold tracking-widest text-2xl sm:text-3xl font-cursive'>Coffee Bucks</a>
                    <p className='pt-4'>Crafted Coffee, Cozy Vibes, Unforgettable Moments Your Perfect Espresso Escape</p>
                    <a href="" className='inline-block bg-yellow-200/50 py-2 px-4 my-5 text-sm rounded-full'>Visit Our Youtube Channel</a>
                </div>
                {/* Footer Links */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>Quick Links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map((data, index)=>(
                                    <li key={index}>
                                        <a href={data.link} className='inline-block hover:scale-105 duration-200'>{data.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* second col link */}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>Download</h1>
                        <ul className='space-y-3'>
                           <li className=' hover:scale-105 duration-200'>
                            <a href="">Android</a>
                           </li>
                           <li className='hover:scale-105 duration-200'>
                            <a href="">IOS</a>
                           </li>
                        </ul>
                        <h1 className='text-xl font-semibold sm:text-left mb-3 mt-6'>Company</h1>
                        <ul className='space-y-3'>
                           <li className=' hover:scale-105 duration-200'>
                            <a href="">Terms & conditions</a>
                           </li>
                           <li className='hover:scale-105 duration-200'>
                            <a href="">Privacy Policy</a>
                           </li>
                        </ul>
                    </div>
                    {/* company address */}
                    <div className='py-8 px-4 col-span-2 sm:col-auto'>
                        <h1 className='text-xl font-semibold sm:text-left mb-3'>Address</h1>
                        <div>
                        <p className='mb-3'> 8/57 thousand lights, Chennai, India</p>
                        <p className='mb-3'>Coffeebucks@gmail.com</p>
                        <p>+91 1234567891</p>

                        {/* social links */}
                        <div className='space-x-3 mt-6'>
                            <a href=""><FaFacebook className=' text-3xl inline-block hover:scale-105 duration-200'/></a>
                            <a href=""><FaLinkedin className=' text-3xl inline-block hover:scale-105 duration-200'/></a>
                            <a href=""><FaInstagram className=' text-3xl inline-block hover:scale-105 duration-200'/></a>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer