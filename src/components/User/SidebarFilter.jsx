import React from 'react'
import FormCheckbox from './FormCheckbox'

const SidebarFilter = () => {
    return (
        <>

            <aside className='hidden md:block w-[8rem]'>
                <h2 className="text-3xl font-semibold mb-4 sr-only">Filters</h2>

                <div className="hidden md:block">
                    <form className="divide-y divide-gray-200 space-y-5">
                        <div>
                            <fieldset>
                                <legend className="block text-sm font-medium text-gray-900">Category</legend>
                                <div className="pt-6 space-y-3">
                                    
                                    <FormCheckbox
                                     name={'phones'}
                                    />
                                    <FormCheckbox
                                     name={'laptops'}
                                    />
                                    <FormCheckbox
                                     name={'watches'}
                                    />

                                </div>
                            </fieldset>
                        </div>

                        <div className="pt-10">
                            <fieldset>
                                <legend className="block text-sm font-medium text-gray-900">Brand</legend>
                                <div className="pt-6 space-y-3">
                                   
                                   <FormCheckbox
                                   name={'samsung'}
                                   />
                                   <FormCheckbox
                                   name={'oppo'}
                                   />
                                   <FormCheckbox
                                   name={'nothing-phone-2a'}
                                   />
                                   <FormCheckbox
                                   name={'lenovo'}
                                   />

                                </div>
                            </fieldset>
                        </div>

                        <div className="pt-10">
                            <fieldset>
                                <legend className="block text-sm font-medium text-gray-900">Price</legend>
                                <div className="pt-6 space-y-3">
                                   
                                   <FormCheckbox
                                    name={'low-hight'}
                                   />
                                   <FormCheckbox
                                    name={'high-low'}
                                   />

                                </div>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </aside>
        </>
    )
}

export default SidebarFilter