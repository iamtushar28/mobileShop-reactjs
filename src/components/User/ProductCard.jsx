// ProductCard.js
import React from 'react';
import { IoMdHeart } from 'react-icons/io';
import PropTypes from 'prop-types';
import BlackBtn from '../../components/User/BlackBtn';

const ProductCard = ({ title, price, imageSrc }) => {
  return (
    <>
      
      
      <div className='w-[9.5rem] h-[16rem] md:w-52 md:h-96 bg-[#F6F6F6] rounded-lg px-4 pt-8 md:pt-14 pb-5 flex flex-col items-center relative'>
        <div className='absolute top-2 right-2 md:top-4 md:right-4 cursor-pointer text-red-500'>
          <IoMdHeart
            size={'20px'}
          />
        </div>
        <img src={imageSrc} alt="image" className='h-24 w-24 md:h-40 md:w-40 mix-blend-multiply' />
        <p className='text-xs md:text-sm text-center py-1 md:py-3 font-medium text-black'>{title}</p>
        <p className='font-bold text-sm mb-3'>₹{price}</p>
        <div className='absolute bottom-4 md:bottom-6'>
          <BlackBtn
            title="Add to Cart"
          />
        </div>
      </div>

    </>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imageSrc: PropTypes.string,
};


export default ProductCard;
