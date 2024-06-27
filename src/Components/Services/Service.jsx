import React from 'react'
import Img2 from '../../assets/Coffee-img.png'

const ServicesData = [
    {
        id: 1,
        img: Img2,
        name: "Espresso",
        desc: " Espresso is a concentrated form of coffee brewed with high pressure, hot water and finely ground coffee beans. Espresso is thicker than regular coffee and has a layer of “cream on top.",
        aosDelay: "100",
    },
    {
        id: 2,
        img: Img2,
        name: "Americano",
        desc: " An americano is just water and espresso. It'll either be served 1/2 and 1/2 or 1/3 espresso to 2/3 water. Traditionally, there will be no milk.",
        aosDelay: "100",
    },
    {
        id: 2,
        img: Img2,
        name: "Cappuccino",
        desc: " A cappuccino is a beloved espresso-based hot coffee drink made with layering of espresso, steamed milk, and milk foam on top. The taste of cappuccinos can be described as creamy, smooth, and balanced.",
        aosDelay: "100",
    },
]

const Service = () => {
  return (
    <>
    <span id='services'></span>
    <div className='py-10'>
        <div className='container'>
            {/* header title */}
            <div data-aos="fade-up" className='text-center mb-20'>
                <h1 className='text-4xl font-bold font-cursive text-gray-800'>Best Coffee For You</h1>
            </div>
            {/* Services Card Section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'>
                {
                    ServicesData.map((data,index)=>{
                        return(
                            <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={index} className='rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl duration-200 max-w-[300px] group relative'>

                                {/* Image section */}
                                <div className='h-[122px]'>
                                    <img src={data.img} alt="" className='max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-100 group-hover:rotate-6 duration-300' />
                                </div>

                                {/* Text content */}
                               
                                    <div className='p-4 text-center'>
                                        <h1 className='text-xl font-bold'>{data.name}</h1>
                                        <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-5'>{data.desc}</p>
                                    </div>


                            </div>
                        )
                    })
                }
                <div className=''>

                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Service