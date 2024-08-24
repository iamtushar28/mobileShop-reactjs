import React from 'react'
import Navbar from '../../components/User/Navbar'
import Footer from '../../components/User/Footer'
import WishlistCard from '../../components/User/WishlistCard';
import Samsung22 from '../../assets/products/samsungS22Ultra.jpg'
import Nothingphone2a from '../../assets/products/Nothing-Phone-2a-White.png'


const Wishlist = () => {
    return (
        <>
            <Navbar />

            <div className="bg-white">
                <div className="py-16 sm:py-10">
                    <div className="mx-auto max-w-7xl sm:px-2 lg:px-8">
                        <div className="mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0">
                            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Wishlist</h1>

                            <p className="mt-2 text-sm text-gray-500">Check the status of wishlist products, manage order, and countinue shopping.</p>
                        </div>
                    </div>

                    <div className='flex justify-normal md:justify-center flex-wrap'>
                        <WishlistCard
                            name="Samsung S22 Ultra 5G | 12GB RAM | 256GB SSD"
                            imagesrc={Samsung22}
                            price="90,000"
                            discreption="SAMSUNG Galaxy S22 ultra 5G (Burgundy, 256 GB) features and specifications include 12 GB RAM, 256 GB ROM, 5000 mAh battery, 108 MP back camera and 40 MP front camera. "
                        />
                        <WishlistCard
                            name="Nothing Phone 2a | 12GB RAM | 512GB SSD"
                            imagesrc={Nothingphone2a}
                            price="26,000"
                            discreption="Nothing Phone (2) is a unique, powerful phone with a monochrome design and a new Glyph Interface. It has a 50 MP dual rear camera, a 6.7 LTPO AMOLED display, and a Snapdragon 8+ Gen Processor."
                        />
                     
                    </div>

                </div>
            </div>


            <Footer />
        </>
    )
}

export default Wishlist