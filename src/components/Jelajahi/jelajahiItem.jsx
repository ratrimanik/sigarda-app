/* eslint-disable react/prop-types */
import { IoIosMore } from "react-icons/io";

const JelajahiItem = (props) => {
    const {
        title,
        vote,
    } = props;

  return (
    <div className="flex justify-between mb-2">
      <div>
        <p className="text-[#9A9A9A] md:text-[12px] text-2xl md:-mt-4 font-bold">
          Sedang Tren di Indonesia
        </p>
        <p className="font-semibold md:text-[13px] text-2xl md:-mt-4 ">{title}</p>
        <p className="text-[#9A9A9A] font-semibold md:text-[12px] text-2xl md:-mt-4">{vote}</p>
      </div>
      <IoIosMore className="md:text-[16px] text-[28px]" />
    </div>
  );
};

export default JelajahiItem;
