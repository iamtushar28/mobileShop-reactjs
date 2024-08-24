import React from 'react'
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const BlackBtn = ({ title, link }) => {
  return (
    <>

      <NavLink
        to={link}
        className='bg-black hover:bg-zinc-800 transition-all duration-300 text-white font-medium outline-none py-2 px-3 md:px-6 w-auto rounded'
      >
        {title}
      </NavLink>
    </>
  )
}

BlackBtn.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default BlackBtn