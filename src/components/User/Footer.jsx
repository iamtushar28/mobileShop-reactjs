import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {

    return (
        <>

            <div className="footer bg-black flex gap-6 md:gap-10 flex-wrap px-6 md:justify-around py-10 md:py-20">
                <div>
                    <a href="#" className="font-sans text-white font-bold text-2xl">
                        <span className="text-[#fdc135]">Cyb</span>er
                    </a>
                    <p className='text-white text-sm mt-4'>
                        Create to change everything for the better. For everyone.
                    </p>
                    <ul className='md:mt-20 mt-6 flex gap-3'>
                        <li><a href="https://github.com/iamtushar28" target="_blank"> <TbBrandGithubFilled color='white' size='25px' /> </a></li>
                        <li><a href="https://www.linkedin.com/in/tushar-suryawanshi-599806299" target="_blank"> <FaLinkedinIn color='white' size='25px' /> </a></li>
                        <li><a href="https://www.instagram.com/i_am_tushar22" target="_blank"> <RiInstagramFill color='white' size='25px' /> </a></li>
                    </ul>
                </div>

                <div className='text-white'>
                    <h3 className='font-semibold text-2xl mb-4'>Services</h3>
                    <ul className='text-sm'>
                        <li className='mb-2'><a href="#">Bonus Programs</a></li>
                        <li className='mb-2'><a href="#">Gift Cards</a></li>
                        <li className='mb-2'><a href="#">Creadit & Payments</a></li>
                        <li className='mb-2'><a href="#">Payment</a></li>
                        <li><a href="#">Offers</a></li>
                    </ul>
                </div>

                <div className='text-white'>
                    <h3 className='font-semibold text-2xl mb-4'>Assistance to the buyer</h3>
                    <ul className='text-sm'>
                        <li className='mb-2'><a href="#">Find an Order</a></li>
                        <li className='mb-2'><a href="#">Terms & conditions</a></li>
                        <li className='mb-2'><a href="#">Gaurantee</a></li>
                        <li className='mb-2'><a href="#">FAQs</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </div>

        </>
    );
}

export default Footer;