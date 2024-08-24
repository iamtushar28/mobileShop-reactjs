import React from 'react'
import Navbar from '../../components/User/Navbar'
import Footer from '../../components/User/Footer'
import NothinPhone2a from '../../assets/products/nothing2ablack.jpg'

const OrderHistory = () => {
    return (
        <>

            <Navbar />

            <div className="bg-white">
                <div className="py-16 sm:py-10">
                    <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
                        <div className="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Order history</h1>
                            <p className="mt-2 text-sm text-gray-500">Check the status of recent orders, manage returns, and discover similar products.</p>
                        </div>
                    </div>

                    <div className="mt-10 mx-4">
                        <h2 className="sr-only">Recent orders</h2>
                        <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
                            <div className="mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0">
                                <div className="border border-gray-200 bg-white rounded-lg">
                                    <div className="flex items-center justify-around border-b border-gray-200 p-4 ">
                                        <dl className="grid flex-1 grid-cols-2 gap-x-6 text-sm sm:col-span-3 sm:grid-cols-3 lg:col-span-2">
                                            <div>
                                                <dt className="font-medium text-gray-900">Order number</dt>
                                                <dd className="mt-1 text-gray-500">WU88191111</dd>
                                            </div>
                                           
                                            <div>
                                                <dt className="font-medium text-gray-900">Total amount</dt>
                                                <dd className="mt-1 font-medium text-gray-900">₹ 26,000.00</dd>
                                            </div>
                                        </dl>
                                    </div>

                                    {/* <!-- Products --> */}
                                    <h4 className="sr-only">Items</h4>
                                    <ul role="list" className="divide-y divide-gray-200">
                                        <li className="p-4 sm:p-6">
                                            <div className="flex items-center sm:items-start">
                                                <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-lg sm:h-28 sm:w-28">
                                                    <img src={NothinPhone2a} alt="Moss green canvas compact backpack with double top zipper, zipper front pouch, and matching carry handle and backpack straps." className="h-full w-full object-cover object-center" />
                                                </div>
                                                <div className="ml-6 flex-1 text-sm">
                                                    <div className="font-medium text-gray-900 sm:flex sm:justify-between">
                                                        <h5 className='text-2xl'>Nothing Phone 2a 5G | Black</h5>
                                                    </div>
                                                    <p className="hidden text-gray-500 sm:mt-2 sm:block">Nothing Phone (2) is a unique, powerful phone with a monochrome design and a new Glyph Interface. It has a 50 MP dual rear camera, a 6.7 LTPO AMOLED display, and a Snapdragon 8+ Gen Processor.</p>
                                                </div>
                                            </div>

                                        </li>
                                    </ul>
                                    {/* product end */}

                                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6 lg:p-8">
                                        <h4 className="font-semibold text-black">Order Placed on <span>August 30, 2024</span></h4>
                                        <div className="mt-6" aria-hidden="true">
                                            <div className="bg-gray-200 rounded-full overflow-hidden">
                                                <div className="h-2 bg-black rounded-full w-1/4" ></div>
                                            </div>
                                            <div className="hidden sm:grid grid-cols-4 text-xs font-medium text-gray-600 mt-6">
                                                <div className="text-black">Order placed</div>
                                                <div className="text-center text-zinc-400">Processing</div>
                                                <div className="text-center text-zinc-400">Shipped</div>
                                                <div className="text-right text-zinc-400">Delivered</div>
                                            </div>
                                        </div>
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

export default OrderHistory