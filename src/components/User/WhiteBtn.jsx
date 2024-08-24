import React from 'react'
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const WhiteBtn = ({title, link}) => {
  return (
    <>
      <NavLink
        to={link}
        className='bg-transparent hover:bg-slate-100 transition-all duration-300 font-medium text-black border-[1.3px] border-black outline-none py-2 px-3 md:px-6 w-auto rounded'
      >
        {title}
      </NavLink>
    </>
  )
}

WhiteBtn.propTypes = {
    title : PropTypes.string.isRequired,
    link: PropTypes.string
}

export default WhiteBtn