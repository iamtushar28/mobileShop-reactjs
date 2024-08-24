import React from 'react'
import PropTypes from 'prop-types';
import { CiDeliveryTruck } from "react-icons/ci";
import { FaXmark } from "react-icons/fa6";

const CartProductCard = ({ name, imagesrc, ram, ssd, price }) => {
  return (
    <>
         <ul role="list" className="border-t border-b border-gray-200 divide-y divide-gray-200">
              <li className="flex py-6 sm:py-10">
                <div className="flex-shrink-0">
                  <img src={imagesrc} className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48" />
                </div>

                <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                  <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                    
                        <h5 className='font-semibold text-lg md:text-2xl'>{name}</h5>
                  
                      </div>
                      <div className="mt-1 flex text-sm">
                        <p className="text-gray-500">{ram} RAM | {ssd} SSD</p>
                      </div>
                      <p className="mt-1 text-sm md:text-lg  font-semibold text-gray-900">₹{price}</p>
                    </div>

                    <div className="mt-4 sm:mt-0 sm:pr-9">
                      <label htmlFor="quantity-2" className="sr-only">Quantity, Nomad Tumbler</label>
                      <select id="quantity-2" name="quantity-2" className="w-14 h-10 rounded-md border border-gray-300 px-2 text-base leading-5 font-medium text-gray-700 text-center shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>

                      <div className="absolute top-0 right-0">
                        <button type="button" className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Remove</span>
                          <FaXmark size={'20px'} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 flex text-sm items-center space-x-2">
                    <div className='bg-zinc-50 h-8 w-8 rounded flex justify-center items-center'>
                    <CiDeliveryTruck size={'20px'} color='black' />
                    </div>
                    <span className='text-green-400'>In stock</span>
                  </p>
                </div>
              </li>
            </ul>
    </>
  )
}

CartProductCard.propTypes = {
    name: PropTypes.string,
    imagesrc: PropTypes.string,
    ram: PropTypes.string,
    ssd: PropTypes.string,
    price: PropTypes.string,
    stock: PropTypes.string,
}

export default CartProductCard