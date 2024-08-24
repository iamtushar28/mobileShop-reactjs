import laptop from '../../assets/img/laptop.png'
import iphone from '../../assets/img/iphone.png'


function Dealsbanner() {

    return (
        <>

            <div className="banner md:h-[300px] h-[200px] w-full bg-[#211C24] md:flex justify-center items-center text-center md:text-start flex-row relative">
                <div className="w-auto text-center">
                    <h4 className='text-[25px] text-white opacity-[40%] pt-[40px] md:pt-0'>Get.Offer</h4>
                    <h1 className='md:text-6xl text-xl text-white font-thin mt-2 mb-2'>Big Diwali <span className='font-semibold text-[#fac039]'>Sale</span></h1>
                    <p className='text-md text-white mt-5 mb-5 opacity-[40%]'>Attractive deals on smartphone, laptops, watches, etc.</p>
                </div>

                <div className="absolute md:right-12 top-8 md:top-12 content-center ">
                    <img src={laptop} alt="samsung" className="mix-blend-screen md:h-60 h-28" />
                </div>
                <div className="absolute md:left-12 content-center top-6 md:top-8 right-2 md:right-0">
                    <img src={iphone} alt="samsung" className="mix-blend-screen md:h-72 h-32" />
                </div>
            </div>

        </>

    );
}

export default Dealsbanner;