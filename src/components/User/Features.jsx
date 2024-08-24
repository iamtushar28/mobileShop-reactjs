import React from 'react'
import Laptop from '../../assets/img/laptop.png'
import Playstation from '../../assets/img/PlayStation.png'
import Visionpro from '../../assets/img/visionpro.png'
import Airpod from '../../assets/img/airpod.png'
import WhiteBtn from '../../components/User/WhiteBtn'


const Features = () => {
    return (
        <>

            <section className='mb-6 flex flex-col-reverse md:flex-row md:flex-nowrap w-full md:h-[34rem]'>

                <div className='w-[100%] md:w-[50%]'>

                    <div className='flex items-center md:gap-2 gap-1 overflow-hidden bg-white md:h-[17rem]'>
                        <img src={Playstation} alt="" className='h-40 md:h-full md:-ml-10' />
                        <div>
                            <h2 className='text-xl md:text-2xl font-bold md:font-semibold mb-1 md:mb-4'>Playstation 5</h2>
                            <p className='text-zinc-400 w-[100%] md:w-[70%] text-sm md:text-base'>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                        </div>
                    </div>

                    <div className='flex flex-col md:flex-row md:h-[17rem]'>
                        <div className='flex flex-row-reverse md:flex-row items-center overflow-hidden gap-1 md:gap-5 py-10 bg-[#F6F6F6] px-2 md:px-0'>
                            <img src={Airpod} alt="" className='h-40 md:-ml-16' />
                            <div>
                                <h2 className='text-xl mb-1'>Oppo AirPods <span className='font-semibold'>Max</span></h2>
                                <p className='text-zinc-400 w-[70%]'>Computational audio. Listen, it's powerful.</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3 px-1 overflow-hidden bg-[#211c24ec]'>
                            <img src={Visionpro} alt="" className='h-44 -ml-32 py-3 md:-ml-40' />
                            <div>
                                <h2 className='text-xl font-thin mb-1 text-white'>Samsung Vision <span className='font-semibold'>Pro</span></h2>
                                <p className='text-zinc-400 w-[70%]'>An immersive way to experience entertainment.</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='w-[100%] md:w-[50%] h-[16rem] md:h-[34rem] flex md:flex-row items-center overflow-hidden bg-[#F6F6F6]'>
                    <div className='px-2 md:px-12'>
                        <h2 className='text-2xl mb-1'>Lenovo <span className='font-semibold'>Flex 5i</span></h2>
                        <p className='text-zinc-400 text-balance'>The IdeaPad Flex 5i Gen 7 (14, Intel) is versatile, portable, and powerful. Up to a 12 th Gen Intel ® Core™ i7 processor gives you seamless streaming, content creation, and entertainment</p>
                        <div className='hidden md:block mt-4'>
                            <WhiteBtn
                                title="Shop Now"
                            />
                        </div>
                    </div>
                    <img src={Laptop} alt="" className='h-[16rem] md:h-[45rem] -mr-[7rem] md:-mr-[20rem]' />
                </div>

            </section>

        </>
    )
}

export default Features