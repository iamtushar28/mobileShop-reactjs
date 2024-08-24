import React from 'react'
import Navbar from '../../components/User/Navbar'
import Footer from '../../components/User/Footer'
import CartProductCard from '../../components/User/CartProductCard'
import BlackBtn from '../../components/User/BlackBtn';
import NothinPhone2a from '../../assets/products/nothing2ablack.jpg'

const Cart = () => {
  return (
    <>

      <Navbar />

      <main className="max-w-2xl mx-auto pt-10 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Shopping Cart</h1>

        <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">

          <CartProductCard 
          name="Nothing Phone 2a 5G | Black"
          imagesrc={NothinPhone2a}
          ram="12"
          ssd="256"
          price="26,000"
          />
          
          </section>

          {/* <!-- Order summary --> */}
          <section aria-labelledby="summary-heading" className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">Order summary</h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">₹ 26,000.00</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Discount</dt>
                <dd className="text-sm font-medium text-gray-900">0</dd>
              </div>

              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="text-base font-medium text-gray-900">Order total</dt>
                <dd className="text-base font-medium text-gray-900">₹ 26,000.00</dd>
              </div>
            </dl>

            <div className="mt-6 flex justify-center">
              <BlackBtn
                title="Checkout"
                link={'/checkout'}
              />
            </div>
          </section>
        </div>


      </main>

      <Footer />

    </>
  )
}

export default Cart