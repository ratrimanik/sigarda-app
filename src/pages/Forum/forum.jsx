import SidebarLayout from "../../fragments/sidebarlayout";
import { IoSearchOutline } from "react-icons/io5";
import { FaSquarePlus } from "react-icons/fa6";

const Forum = () => {
  return (
    <SidebarLayout>
      <div>
        <div className="bg-[#F2F9FF] px-2">
          <div className="">
            <h1 className="text-xl font-bold text-primary">Forum</h1>

            <hr className="border border-[#C1DFF5] my-4" />

            <div>
              <div className="flex gap-16">
                <div className="relative mb-4 w-full mr-2">
                  <input
                    type="text"
                    className="w-full pl-12 h-8 border-white shadow-md text-sm rounded-full focus:outline-none text-black"
                    placeholder="Cari Forum"
                  />
                  <IoSearchOutline className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
                <div>
                  <button className="rounded-lg relative bg-white shadow-xl items-center w-28 h-8">
                    <FaSquarePlus className="absolute top-1/2 transform -translate-y-1/2 right-1 w-7 h-7 text-primary" />
                    <p className="-ml-4 mr-4  text-[14px] text-[#9A9A9A]">
                      Buat forum
                    </p>
                  </button>
                </div>
              </div>
              <div  className="bg-white h-full mb-4 px-4 md:max-w-[650px] rounded-lg shadow-md">
                RAtri
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Forum;
