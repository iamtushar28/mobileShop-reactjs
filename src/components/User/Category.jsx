import { IoPhonePortraitOutline, IoWatch } from "react-icons/io5";
import { FaHeadphones } from "react-icons/fa";
import { TiCamera } from "react-icons/ti";
import { GrPersonalComputer } from "react-icons/gr";
import { LuGamepad2 } from "react-icons/lu";
import CategoryCard from "./CategoryCard";

function Category() {

  return (
    <>

      <div className="category relative mt-6 md:mt-0">

        <h3 className='hidden md:block absolute md:top-[12px] md:left-[38px] font-semibold text-lg border-b-2 py-1 border-b-[#fac039]'>Browse by Category</h3>

        <h3 className="block md:hidden relative left-4 mb-5 font-semibold text-lg">Browse category</h3>

        <div className='flex flex-wrap justify-around md:h-[220px] items-center'>

          <CategoryCard
            icon={<IoPhonePortraitOutline size={'25px'} />}
            title="Phone"
          />

          <CategoryCard
            icon={<IoWatch size={'25px'}  />}
            title="Watches"
          />

          <CategoryCard
            icon={<TiCamera size={'25px'}  />}
            title="Cameras"
          />

          <CategoryCard
            icon={<FaHeadphones size={'25px'}  />}
            title="Headphones"
          />

          <CategoryCard
            icon={<GrPersonalComputer size={'25px'}  />}
            title="Laptops"
          />

          <CategoryCard
            icon={<LuGamepad2 size={'25px'}  />}
            title="Games"
          />

        </div>
      </div>

    </>
  );
}

export default Category;