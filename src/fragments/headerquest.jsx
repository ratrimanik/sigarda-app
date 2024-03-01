/* eslint-disable react/prop-types */
import { IoSearchOutline } from "react-icons/io5";
import { FaCirclePlus } from "react-icons/fa6";
import ButtonHandlerQuestion from "../components/Button/handlerquestion";
import NavbarPage from "../components/HeaderMobile/title";
import HeaderMobile from "./headermobile";

const HeaderQuest = (props) => {
  const { children } = props;

  return (
    <div className="md:bg-[#F2F9FF] bg-white px-2">
      <div className="flex">
        <div className="pr-7">
          <NavbarPage title="Pertanyaan" />
          <div className="flex justify-between">
            <ButtonHandlerQuestion />
            <div className="flex items-center mt-4">
              <FaCirclePlus className="text-primary text-2xl" />
            </div>
          </div>

          <hr className="border border-[#C1DFF5] mb-4 mt-2" />

          <div>
            <div className="md:flex hidden">
              <div className="relative mb-4 w-full mr-2">
                <input
                  type="text"
                  className="w-full pl-12 h-8 bg-white border-white shadow-md text-sm rounded-full focus:outline-none text-black"
                  placeholder="Cari di Sigarda"
                />
                <IoSearchOutline className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" />
              </div>
              <img src="src/assets/img/filter.png" alt="" className="w-8 h-8" />
            </div>

            <div className="md:hidden fixed top-0 left-0 w-full bg-white justify-between items-center px-4 py-4">
              <HeaderMobile />
              <div className="flex pt-4 gap-2">
                <ButtonHandlerQuestion />
              </div>
            </div>

            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderQuest;
