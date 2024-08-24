import React from 'react';
import Navbar from '../../components/User/Navbar';
import Footer from '../../components/User/Footer';
import SidebarFilter from '../../components/User/SidebarFilter';
import Searchbar from '../../components/User/Searchbar'
import ProductCard from '../../components/User/ProductCard';
import Samsung22 from '../../assets/products/samsungS22Ultra.jpg'
import GalaxyBookPro from '../../assets/products/galaxybook.jpg'
import Nothingphone2a from '../../assets/products/Nothing-Phone-2a-White.png'
import SmartWatch from '../../assets/products/smartwatch.png'


function App() {

    return (
        <>
            <Navbar />

            <main className="mx-2 md:mx-4">
                <div className="md:border-b border-gray-200 pt-12 pb-10">
                    <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">New Arrivals</h1>
                    <p className="mt-4 text-base text-gray-500">Checkout out the latest release of Phones, Laptops, Smartwatches & Earphones!</p>
                </div>


                {/* serach bar */}
                <div className='block md:hidden'>
                    <Searchbar />
                </div>

                <div className="pt-5 pb-14 flex md:gap-20">

                    <SidebarFilter />

                    <section aria-labelledby="product-heading" className="mt-6">

                        <div className='flex flex-wrap justify-center gap-3'>

                            <ProductCard
                                title="Galaxy S22 Ultra | 12GB RAM | 256GB SSD"
                                price="90,000"
                                imageSrc={Samsung22}
                            />
                            <ProductCard
                                title="Galaxy Book Pro | Intel core i5 | 8GBRAM | 512GBSSD"
                                price="90,000"
                                imageSrc={GalaxyBookPro}
                            />
                            <ProductCard
                                title="Lenovo Flex 5i | Intel core i5 | 8GBRAM | 512GBSSD"
                                price="90,000"
                                imageSrc={Nothingphone2a}
                            />
                            <ProductCard
                                title="Fire-Bolt Smartwatch | 44mm Touch Display"
                                price="90,000"
                                imageSrc={SmartWatch}
                            />

                        </div>

                    </section>
                </div>
            </main>

            <Footer />

        </>
    );
}

export default App;