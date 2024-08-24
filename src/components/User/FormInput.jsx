import React from 'react'
import PropTypes from 'prop-types';


const FormInput = ({label, name, type}) => {
    return (
        <>
            <div>
                <label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</label>
                <div className="mt-1">
                    <input type={type} id={name} name={name} autoComplete="given-name" className="block w-full h-9 outline-none border border-gray-300 focus:ring-1 rounded-md shadow-sm focus:ring-black focus:border-black sm:text-sm" />
                </div>
            </div>

        </>
    )
}

FormInput.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string
  };

export default FormInput