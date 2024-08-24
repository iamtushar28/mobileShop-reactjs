import ProductCard from "./ProductCard";
import Samsung22 from '../../assets/products/samsungS22Ultra.jpg'
import Samsung24 from '../../assets/products/samsungS24Ultra.jpg'
import Nothingphoneblack from '../../assets/products/nothing2ablack.jpg'
import Nothingphone2a from '../../assets/products/Nothing-Phone-2a-White.png'
import GalaxyBookPro from '../../assets/products/galaxybook.jpg'
import SmartWatch from '../../assets/products/smartwatch.png'
import Laptop from '../../assets/img/laptop.png'
import Airpod from '../../assets/img/airpod.png'

function Products() {

  return (
    <>

      <div className="products h-auto w-full p-4">

        {/* title start */}
        <div className='flex gap-4 ml-5 mb-5'>
          <h2 className='font-semibold border-b-2 border-[#fac039] cursor-pointer'>New Arrival</h2>
        </div>
        {/* title end */}

        {/* product cards */}
        <div className='flex flex-wrap justify-center gap-3 mx-1 md:gap-3 md:mx-1 mt-3 mb-6'>

          <ProductCard
            title="Galaxy S22 Ultra | 12GB RAM | 256GB SSD"
            price="90,000"
            imageSrc={Samsung22}
          />
          <ProductCard
            title="Galaxy S23 Ultra 5G | 12GB RAM | 512GB SSD"
            price="90,000"
            imageSrc={Samsung24}
          />
          <ProductCard
            title="Lenovo Flex 5i | Intel core i5 | 8GBRAM | 512GBSSD"
            price="90,000"
            imageSrc={Laptop}
          />
          <ProductCard
            title="Nothing Phone 2a | 12GB RAM | 512GB SSD"
            price="90,000"
            imageSrc={Nothingphone2a}
          />
          <ProductCard
            title="Galaxy Book Pro | Intel core i5 | 8GBRAM | 512GBSSD"
            price="90,000"
            imageSrc={GalaxyBookPro}
          />
          <ProductCard
            title="Nothing Phone 2a | 12GB RAM | 512GB SSD"
            price="90,000"
            imageSrc={Nothingphoneblack}
          />
          <ProductCard
            title="Samsung Airpod | HD Audio | Noice Cancelation"
            price="90,000"
            imageSrc={Airpod}
          />
          <ProductCard
            title="Galaxy S22 Ultra | 12GB RAM | 256GB SSD"
            price="90,000"
            imageSrc={Samsung22}
          />
          <ProductCard
            title="Lenovo Flex 5i | Intel core i5 | 8GBRAM | 512GBSSD"
            price="90,000"
            imageSrc={Laptop}
          />
          <ProductCard
            title="Fire-Bolt Smartwatch"
            price="90,000"
            imageSrc={SmartWatch}
          />


        </div>
        {/* product cards end */}

      </div>

    </>
  );
}

export default Products;