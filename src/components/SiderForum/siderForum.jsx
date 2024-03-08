/* eslint-disable react/no-children-prop */
import { Bs2CircleFill } from "react-icons/bs";
import RecomForum from "./rekomendasiForum";

const SiderForum = () => {
  return (
    <div className="md:w-64 pl-12">
      <div className="relative md:mt-16 mt-3 flex md:w-64 w-64">
        <button
          type="button"
          className="w-64 md:h-8 h-12 md:bg-primary shadow-md rounded-full focus:outline-none md:text-white text-primary border border-primary"
        >
          <p className="md:text-xs text-[24px] whitespace-nowrap font-bold md:-ml-16">Undangan Forum</p>
          <Bs2CircleFill className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#D63230] hidden lg:block" />
        </button>
      </div>

      <RecomForum/>
    </div>
  );
};

export default SiderForum;
