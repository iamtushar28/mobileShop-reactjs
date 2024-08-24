import React from 'react'
import Navbar from '../../components/User/Navbar'
import Footer from '../../components/User/Footer'
import BlackBtn from '../../components/User/BlackBtn'
import '../../assets/css/animation.css';

const OrderConfirmed = () => {
  return (
    <>

      <Navbar />

      <section className='animatedbg flex flex-col gap-6 justify-center items-center h-[80vh]'>
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Order Confirmed! 🥳</h1>
        <BlackBtn
          title={'Track Order'}
          link={'/order'}
        />
      </section>
      <Footer />

    </>
  )
}

export default OrderConfirmed