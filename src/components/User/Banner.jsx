import React from 'react';
import samsung from '../../assets/img/samsung3.jpg';


const Banner = () => {
    return (
        <>
            <div className="banner md:h-[543px] h-auto w-full bg-[#211C24] md:flex gap-14 items-center text-center md:text-start flex-row">
                <div className="heading w-auto md:h-[] md:ml-[85px]">
                    <h4 className='text-[25px] font-semibold text-white opacity-[40%] pt-[40px] md:pt-0'>Pro.Beyond</h4>
                    <h1 className='md:text-5xl text-4xl text-white font-thin mt-2 mb-2'>Galaxy S24 <span className='font-semibold text-[#fac039]'>Ultra</span></h1>
                    <p className='text-md text-white mt-5 mb-5 opacity-[40%]'>Create to change everything for the better. For everyone</p>
                    <button className='border-white border text-white px-6 py-3 w-[160px] rounded hover:border-[#fac039] font-semibold transition-all duration-500 hover:shadow hover:shadow-[#fac039]'>Shop Now</button>
                </div>
                <div className="image mt-4 md:mt-0 flex justify-center">
                    <img src={samsung} alt="samsung" className="md:w-[43rem] md:h[50rem] mb-6 md:mb-0 mix-blend-screen" />
                 
                </div>
            </div>
        </>
    )
}

export default Banner