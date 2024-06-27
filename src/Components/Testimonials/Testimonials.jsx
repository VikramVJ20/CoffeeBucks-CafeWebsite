import React from 'react'
import Slider from 'react-slick'
import profile1 from '../../assets/profile-1.jpg'
import profile2 from '../../assets/profile-2.jpg'
import profile3 from '../../assets/profile-3.jpg'
import profile4 from '../../assets/profile-4.jpg'
import profile5 from '../../assets/profile-5.jpg'
import profile6 from '../../assets/profile-6.jpg'

const TestimonialData =[
    {
        id: 1,
        name: "",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem neque eveniet odit dolor cum exercitationem sunt molestiae quasi ratione inventore dicta, dignissimos iure ut culpa laboriosam a laudantium debitis! Doloremque.",
        img: profile1, 
    },
    {
        id: 2,
        name: "",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem neque eveniet odit dolor cum exercitationem sunt molestiae quasi ratione inventore dicta, dignissimos iure ut culpa laboriosam a laudantium debitis! Doloremque.",
        img: profile2,
    },
    {
        id: 3,
        name: "",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem neque eveniet odit dolor cum exercitationem sunt molestiae quasi ratione inventore dicta, dignissimos iure ut culpa laboriosam a laudantium debitis! Doloremque.",
        img: profile3,
    },
    {
        id: 4,
        name: "",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem neque eveniet odit dolor cum exercitationem sunt molestiae quasi ratione inventore dicta, dignissimos iure ut culpa laboriosam a laudantium debitis! Doloremque.",
        img: profile4,
    },
    {
        id: 5,
        name: "",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem neque eveniet odit dolor cum exercitationem sunt molestiae quasi ratione inventore dicta, dignissimos iure ut culpa laboriosam a laudantium debitis! Doloremque.",
        img: profile5,
    },
    {
        id: 6,
        name: "",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem neque eveniet odit dolor cum exercitationem sunt molestiae quasi ratione inventore dicta, dignissimos iure ut culpa laboriosam a laudantium debitis! Doloremque.",
        img: profile6,
    },
]

const Testimonials = () => {
    const settings ={
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infiniteSlides: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    }
  return (
    <div className='py-14 mb-10'>
        <div className="container">
            {/* header section */}
            <div data-aos="fade-up" className='text-center mb-10'>
                <h1 className='text-4xl font-bold font-cursive text-gray-800'>Testimonials</h1>
            </div>
            {/* testimonial-section */}
            <div data-aos="zoom-in">
                <Slider {...settings}>
                    {
                        TestimonialData.map((data, index)=>{
                            return(
                                <div className='my-6' key={data.id}>
                                    <div className=' flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-primary/10 relative'>
                                        {/* image-section */}
                                        <div className='mb-4'>
                                            <img src={data.img} alt="" className='rounded-full w-20 h-20' />
                                        </div>
                                        {/* context-section */}
                                        <div className='flex flex-col items-center gap-4'>
                                            <div className='space-y-3'>
                                                <p className='text-xs text-gray-500'>{data.text}</p>
                                                <h1 className='text-xl font-bold text-black/60 font-cursive'>{data.name}</h1>
                                            </div>
                                        </div>
                                        <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    </div>
  )
}

export default Testimonials