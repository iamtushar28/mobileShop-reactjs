import React from 'react'
import Navbar from '../../components/User/Navbar'
import Footer from '../../components/User/Footer'
import BlackBtn from '../../components/User/BlackBtn'
import FormInput from '../../components/User/FormInput'
import NothinPhone2a from '../../assets/products/nothing2ablack.jpg'
import { FaCircleCheck } from "react-icons/fa6";
import { GrTrash } from "react-icons/gr";
import { Form } from 'react-router-dom';

const CheckoutPayment = () => {
    return (
        <>
            <Navbar />

            <main className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto lg:max-w-none">
                    <h1 className="sr-only">Checkout</h1>

                    <Form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                        <div>
                            <div>
                                <h2 className="text-lg font-medium text-gray-900">Contact information</h2>

                                <FormInput
                                     label={'Email'}
                                     name={'email'}
                                     type={'email'}
                                    />

                            </div>

                            <div className="mt-10 border-t border-gray-200 pt-10">
                                <h2 className="text-lg font-medium text-gray-900">Shipping information</h2>

                                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                    
                                    <FormInput
                                     label={'First Name'}
                                     name={'firstName'}
                                     type={'text'}
                                    />

                                    <FormInput
                                     label={'Last Name'}
                                     name={'lastName'}
                                     type={'text'}
                                    />

                                    <FormInput
                                     label={'Adress'}
                                     name={'adress'}
                                     type={'text'}
                                    />

                                    <FormInput
                                     label={'City'}
                                     name={'city'}
                                     type={'text'}
                                    />

                                    <div>
                                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">State</label>
                                        <div className="mt-1">
                                            <select id="country" name="country" autoComplete="country-name" className="block w-full h-9 outline-none border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-black focus:border-black sm:text-sm">
                                                <option value="Maharashtra">Maharashtra</option>
                                            </select>
                                        </div>
                                    </div>

                                    <FormInput
                                     label={'Pincode'}
                                     name={'pincode'}
                                     type={'text'}
                                    />

                                    <FormInput
                                     label={'Phone Number'}
                                     name={'phone'}
                                     type={'text'}
                                    />

                                   
                                   
                                </div>
                            </div>

                            <div className="mt-10 border-t border-gray-200 pt-10">
                                <fieldset>
                                    <legend className="text-lg font-medium text-gray-900">Payment method</legend>

                                    <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">

                                        <label className="relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none">
                                            <input type="radio" name="delivery-method" value="Standard" className="sr-only" aria-labelledby="delivery-method-0-label" aria-describedby="delivery-method-0-description-0 delivery-method-0-description-1" />
                                            <div className="flex-1 flex">
                                                <div className="flex flex-col">
                                                    <span id="delivery-method-0-label" className="block text-sm font-medium text-gray-900"> Cash On Delivery </span>
                                                </div>
                                            </div>

                                            <div className='text-black'>
                                                <FaCircleCheck />
                                            </div>

                                        </label>
                                    </div>
                                </fieldset>
                            </div>


                        </div>

                        {/* Order summary  */}
                        <div className="mt-10 lg:mt-0">
                            <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

                            <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                                <h3 className="sr-only">Items in your cart</h3>
                                <ul role="list" className="divide-y divide-gray-200">
                                    <li className="flex py-6 px-4 sm:px-6">
                                        <div className="flex-shrink-0">
                                            <img src={NothinPhone2a} alt="Front of men&#039;s Basic Tee in black." className="w-20 rounded-md" />
                                        </div>

                                        <div className="ml-6 flex-1 flex flex-col">
                                            <div className="flex">
                                                <div className="min-w-0 flex-1">
                                                    <h4 className="text-sm">
                                                        <a href="#" className="md:text-lg font-semibold text-gray-700 hover:text-gray-800"> Nothing Phone 2a 5G | Black</a>
                                                    </h4>
                                                    <p className="mt-1 text-sm text-gray-500">12GB RAM | 512GB SSD</p>
                                                </div>

                                                <div className="ml-4 flex-shrink-0 flow-root">
                                                    <button type="button" className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500">
                                                        <span className="sr-only">Remove</span>
                                                        {/*  Delet icon */}
                                                        <GrTrash/>
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="flex-1 pt-2 flex items-end justify-between">
                                            <p className="mt-1 md:text-lg text-sm text-black font-semibold">₹ 26,000.00</p>

                                                <div className="ml-4">
                                                    <label htmlFor="quantity" className="sr-only">Quantity</label>
                                                    <select id="quantity" name="quantity" className="rounded-md h-10 w-12 p-2 border border-gray-300 text-base font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black sm:text-sm">
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                        <option value="6">6</option>
                                                        <option value="7">7</option>
                                                        <option value="8">8</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                                <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm">Subtotal</dt>
                                        <dd className="text-sm font-medium text-gray-900">$64.00</dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm">Shipping</dt>
                                        <dd className="text-sm font-medium text-gray-900">$5.00</dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-sm">Taxes</dt>
                                        <dd className="text-sm font-medium text-gray-900">$5.52</dd>
                                    </div>
                                    <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                                        <dt className="text-base font-medium">Total</dt>
                                        <dd className="text-base font-medium text-gray-900">$75.52</dd>
                                    </div>
                                </dl>

                                <div className="border-t flex justify-center border-gray-200 py-6 px-4 sm:px-6">
                                    <BlackBtn
                                        title="Confirm Order"
                                        link={'/order-confirmed'}
                                    />
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
            </main>

            <Footer />
        </>
    )
}

export default CheckoutPayment