import React from 'react'
import { TiCamera } from "react-icons/ti";
import { SlScreenSmartphone } from "react-icons/sl";
import { GiBattery75 } from "react-icons/gi";
import { HiMiniCpuChip } from "react-icons/hi2";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import Navbar from '../../components/User/Navbar'
import Footer from '../../components/User/Footer'
import NothinPhone2a from '../../assets/products/nothing2ablack.jpg'
import BlackBtn from '../../components/User/BlackBtn';
import WhiteBtn from '../../components/User/WhiteBtn';


const Detailpage = () => {
    return (
        <>
            < Navbar />

            <div className="bg-white py-6 sm:py-8 lg:py-5">
                <div className="mx-auto max-w-screen-xl py-2 h-fit px-4 md:px-8">
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* <!-- images - start --> */}
                        <div>
                            <img src={NothinPhone2a} className='mix-blend-multiply' alt="SamsungS22Ultra" />
                        </div>
                        {/* <!-- images - end --> */}

                        {/* <!-- content - start --> */}
                        <div className="md:py-8">
                            {/* <!-- name - start --> */}
                            <div className="mb-2 md:mb-3">
                                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Nothing Phone 2a | Black</h2>
                            </div>
                            {/* <!-- name - end --> */}

                            {/* <!-- rating - start --> */}
                            <div className="mb-6 flex items-center gap-3 md:mb-4">
                                <div className="flex h-7 items-center gap-1 rounded-full bg-black px-2 text-white">
                                    <span className="text-sm">4.2</span>
                                    <FaStar size="16px" color="white" />
                                </div>

                                <span className="text-sm text-gray-500 transition duration-100">56 ratings</span>
                            </div>
                            {/* <!-- rating - end --> */}


                            {/* <!-- storage - start --> */}
                            <div className='flex gap-4 mb-6'>
                                <div>
                                    <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">Storage</span>
                                    <button type="button" className="flex px-10 h-8 w-12 items-center justify-center rounded-md border text-white bg-black text-center text-sm font-semibold">256GB</button>
                                </div>

                                <div>
                                    <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">RAM</span>
                                    <button type="button" className="flex h-8 px-10 w-12 items-center justify-center rounded-md border text-white bg-black text-center text-sm font-semibold">12GB</button>
                                </div>

                            </div>
                            {/* <!-- storage - end --> */}

                            {/* <!-- specification - start --> */}
                            <div className="mb-8 md:mb-10">
                                <span className="mb-3 inline-block text-sm font-semibold text-gray-500 md:text-base">Highlight</span>

                                <div className="flex flex-wrap gap-3">
                                    <div type="button" className="flex h-12 w-36 px-4 py-7 items-center rounded-md shadow-sm bg-[#F6F6F6] gap-3">
                                        <span> <SlScreenSmartphone size="20px" /></span>
                                        <div className='flex items-start flex-col'>
                                            <p className='text-sm text-zinc-400'>Screen-Size</p>
                                            <span className='text-sm font-semibold text-zinc-700'>17.27cm</span>
                                        </div>
                                    </div>

                                    <div type="button" className="flex h-12 w-36 px-4 py-7 items-center rounded-md shadow-sm bg-[#F6F6F6] gap-3">
                                        <span> <GiBattery75 size="20px" /></span>
                                        <div className='flex items-start flex-col'>
                                            <p className='text-sm text-zinc-400'>Battery</p>
                                            <span className='text-sm font-semibold text-zinc-700'>5000mAh</span>
                                        </div>
                                    </div>
                                    <div type="button" className="flex h-12 w-fit px-4 py-7 items-center rounded-md shadow-sm bg-[#F6F6F6] gap-3">
                                        <span> <HiMiniCpuChip size="20px" /></span>
                                        <div className='flex items-start flex-col'>
                                            <p className='text-sm text-zinc-400'>Processor</p>
                                            <span className='text-sm font-semibold text-zinc-700'>Snapdragon 8 Gen 3 Processor
                                            </span>
                                        </div>
                                    </div>

                                    <div type="button" className="flex h-12 w-fit px-4 py-7 items-center rounded-md shadow-sm bg-[#F6F6F6] gap-3">
                                        <span> <TiCamera size="20px" /></span>
                                        <div className='flex items-start flex-col'>
                                            <p className='text-sm text-zinc-400'>Camera</p>
                                            <span className='text-sm font-semibold text-zinc-700'>200MP+50MP+12MP+10MP | 12MP Front Camera</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* <!-- specification - end --> */}

                            {/* <!-- price - start --> */}
                            <div className="mb-4">
                                <div className="flex items-end gap-2">
                                    <span className="text-xl font-bold text-gray-800 md:text-2xl">₹26,000</span>
                                    <span className="mb-0.5 text-red-500 line-through">₹30,000</span>
                                </div>

                                <span className="text-sm text-gray-500">incl. all taxes</span>
                            </div>
                            {/* <!-- price - end --> */}

                            {/* <!-- shipping notice - start --> */}
                            <div className="mb-6 flex items-center gap-2 text-gray-500">
                                <CiDeliveryTruck size="25px" />

                                <span className="text-sm">2-8 day shipping</span>
                            </div>
                            {/* <!-- shipping notice - end --> */}

                            {/* <!-- buttons - start --> */}
                            <div className="flex gap-2.5">
                               
                               <WhiteBtn
                               title="Add to Whishlist"
                               link={'/wishlist'}
                               />

                                <BlackBtn
                                    title="Add to Cart"
                                    link={'/cart'}
                                />
                                
                            </div>
                            {/* buttons end */}

                            {/* <!-- extrainfo - start --> */}
                            <div className='flex gap-7'>
                                <div className='flex h-12 w-fit px-4 py-7 items-center rounded-md mt-5 gap-3'>
                                    <div className='h-12 w-12 flex items-center rounded-lg justify-center bg-[#F6F6F6]'>
                                        <CiDeliveryTruck size="25px" />
                                    </div>
                                    <div>
                                        <p className='text-sm text-zinc-400'>In Stock</p>
                                        <span className='text-sm font-semibold text-zinc-700'>Available</span>
                                    </div>
                                </div>

                                <div className='flex h-12 w-fit px-4 py-7 items-center rounded-md mt-5 gap-3'>
                                    <div className='h-12 w-12 flex items-center rounded-lg justify-center bg-[#F6F6F6]'>
                                        <BiSolidOffer size="25px" />
                                    </div>
                                    <div>
                                        <p className='text-sm text-zinc-400'>Guarantee</p>
                                        <span className='text-sm font-semibold text-zinc-700'>1 Year</span>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- extrainfo - end --> */}
                        </div>
                        {/* <!-- content - end --> */}
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default Detailpage