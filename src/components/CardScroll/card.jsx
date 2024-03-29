/* eslint-disable react/prop-types */
import { MdClose } from "react-icons/md";

const Card = ({ title, description, image }) => {
  return (
    <div className="inline-block">
      <div className="bg-white md:w-36 w-72 md:h-52 h-[430px] max-w-xs overflow-hidden rounded-lg shadow-md ">
        <button
          type="button"
          className="md:text-[16px] text-[44px] text-[#9A9A9A] rounded-full md:pt-2 pt-4 md:ml-28 ml-56 font-bold"
        >
          {<MdClose />}
        </button>
        <div className="flex flex-col items-center ">
          <img src={image} alt="" className="mb-2 md:w-24 md:h-[76px] w-56 h-[200px] "/>
          <div className="flex flex-col justify-center items-center text-center">
            <p className="md:text-sm text-2xl mx-2 font-bold">{title}</p>
            <p className="md:text-xs text-2xl text-[#9A9A9A] mx-4 w-full">
              {description}
            </p>
          </div>
          <button
            type="button"
            className="flex md:text-xs text-xl bg-primary mt-2 text-white rounded-full px-4 font-bold"
          >
            <p>Ikuti</p>
            <span className="mx-1">·</span>
            <p>12rb</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
