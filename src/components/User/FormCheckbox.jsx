import React from 'react'
import PropTypes from 'prop-types';


const FormCheckbox = ({name}) => {
    return (
        <>

            <div className="flex items-center">
                <input id={name} name={name} value={name} type="checkbox" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded" />
                <label htmlFor={name} className="ml-3 text-sm text-gray-600"> {name} </label>
            </div>

        </>
    )
}

FormCheckbox.propTypes = {
    name: PropTypes.string.isRequired,
  
  };

export default FormCheckbox