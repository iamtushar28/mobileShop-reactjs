import React from 'react'
import PropTypes from 'prop-types';
import BlackBtn from './BlackBtn';
import { FaXmark } from "react-icons/fa6";


const WishlistCard = ({ imagesrc, name, discreption, price }) => {
    return (
        <>
            <div className="mt-4 mx-4">
                <h2 className="sr-only">Recent orders</h2>
                <div className="mx-auto max-w-8xl sm:px-2 lg:px-8">
                    <div className="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
                        <div className="border border-gray-200 bg-white rounded-lg">
                            {/* <!-- Products --> */}
                            <h4 className="sr-only">Items</h4>
                            <ul role="list" className="divide-y divide-gray-200">
                                <li className="relative py-6 px-2 sm:p-6">
                                    <div className="flex items-center sm:items-start">
                                        <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-lg sm:h-28 sm:w-28">
                                            <img src={imagesrc} alt="Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps." className="h-full w-full object-cover object-center" />
                                        </div>
                                        <div className="ml-6 mb-3 flex-1 text-sm">
                                            <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                                                <h5 className='font-semibold md:text-2xl'>{name}</h5>
                                            </div>
                                            <p className="hidden text-gray-500 sm:mt-2 sm:block">{discreption}</p>
                                            <p className="md:text-lg text-black font-medium mt-2 md:font-semibold sm:mt-2">₹{price}</p>
                                        </div>

                                        {/* remove btn */}
                                        <div className='cursor-pointer text-lg hover:text-zinc-500 transition-all duration-300 absolute top-4 right-4'>
                                            <FaXmark />
                                        </div>
                                        {/* remove btn end */}

                                        {/* add to cart btn */}
                                        <div className='absolute bottom-4 right-4'>
                                            <BlackBtn
                                                title="Add to Cart"
                                            />
                                        </div>
                                        {/* add to cart btn end */}


                                    </div>

                                </li>
                            </ul>
                            {/* product end */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

WishlistCard.propTypes = {
    name: PropTypes.string.isRequired,
    imagesrc: PropTypes.string,
    discreption: PropTypes.string,
    price: PropTypes.string
}

export default WishlistCard