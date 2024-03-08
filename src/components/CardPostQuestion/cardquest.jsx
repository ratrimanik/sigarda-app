/* eslint-disable react/prop-types */
/* eslint-disable react/no-children-prop */
import { IoIosMore } from "react-icons/io";
import { MdClose } from "react-icons/md";
import Button from "../Button/button";
const CardQuest = ({data}) => {
  const { 
    quest, 
    respon, 
    date, 
    status = null, 
    rate, 
    poin 
} = data;

  return (
    <div className="bg-white h-full mb-4 md:px-4 md:max-w-[650px] rounded-lg shadow-md mt-4 md:mt-0 md:ml-0 md:mr-0 -ml-2 -mr-8">
      <div className="py-4 md:px-0 px-16">
        <div className="flex justify-between">
          <div className="font-bold md:text-[13px] text-[28px] pr-4">{quest}</div>
          <div className="flex gap-4 text-2xl md:text-sm">
            <IoIosMore />
            <MdClose />
          </div>
        </div>
        <div className="flex md:text-[11px] text-2xl">
          <div className="flex text-gray-400">
            <p>{respon}</p>
            <span className="mx-1">·</span>
            <p>{date}</p>
            <span className="mx-1">·</span>
          </div>
          <p className="text-primary font-bold">{status}</p>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex mt-2 gap-2 items-center">
            <Button
              color="bg-white border border-gray-400 px-8 py-1 md:text-xs text-2xl text-primary"
              children="Jawab"
            />
            <div className="flex">
              <img
                src="src/assets/img/rate-plus.png"
                alt=""
                className="md:w-5 md:h-5 w-8 h-8"
              />
              <p className="md:text-xs text-xl ml-1">{rate}</p>
            </div>
            <img src="src/assets/img/rate-min.png" alt="" className="md:w-5 md:h-5 w-8 h-8" />
          </div>
          <div className="flex">
            <Button
              color="bg-[#F39237] shadow-lg px-4 py-1 md:text-xs text-xl text-white"
              children={poin}
            />
            <img src="src/assets/img/save.png" alt="" className="md:w-4 md:h-5 w-8 h-8 mt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardQuest;
