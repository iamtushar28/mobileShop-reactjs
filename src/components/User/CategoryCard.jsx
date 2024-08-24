import React from 'react'
import PropTypes from 'prop-types';


const CategoryCard = ({ icon, title }) => {
    return (
        <>

            <div className='bg-white shadow hover:shadow-lg w-28 h-20 md:w-32 md:h-24 rounded-lg flex flex-col items-center justify-center gap-2 transition-all duration-500 cursor-pointer mb-5 md:mb-0'>
                {icon}
                <p className='font-semibold text-xs md:text-sm'>{title}</p>
            </div>

        </>
    )
}

CategoryCard.prototype = {
    icon : PropTypes.element.isRequired,
    title : PropTypes.string.isRequired
}

export default CategoryCard