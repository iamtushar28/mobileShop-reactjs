import React from 'react'
import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
    return (
        <>
            <div className="relative">
                <input
                    type="text"
                    placeholder="Search Product..."
                    name="search"
                    id="search"
                    className="block md:hidden w-full px-4 py-2 text-gray-900 border hover:shadow transition-all duration-300 placeholder-gray-500 rounded-md outline-none sm:text-sm"
                />
                <div className="absolute inset-y-0 right-0 flex items-center text-zinc-400 pr-3">
                    <CiSearch size="22px" />
                </div>
            </div>
        </>
    )
}

export default Searchbar