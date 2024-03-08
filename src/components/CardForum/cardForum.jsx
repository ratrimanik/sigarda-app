/* eslint-disable react/prop-types */
import { IoIosMore } from "react-icons/io";

const CardForum = (props) => {
  const { title, description, date, image } = props;

  return (
    <div className="bg-white md:h-24 h-48  rounded-lg shadow-md pr-4 md:border-none border border-primary md:my-0 my-4 md:py-0 py-4">
      <div className="flex md:items-start items-center">
        <img
          src={image}
          className="md:w-24 md:h-24 md:rounded-none rounded-full w-32 mx-4 py-2 md:mx-0 md:py-0"
          alt=""
        />
        <div className="ml-2">
          <div className="flex justify-between">
            <p className="font-bold md:text-[12px] text-[28px]">{title}</p>
            <IoIosMore className="text-2xl md:text-sm md:hidden mt-3" />
          </div>
          <p className="md:text-[12px] text-[24px]  text-[#9A9A9A]">
            {description}
          </p>
          <div className="flex items-center justify-between pb-1 pt-1">
            <div className="flex items-center">
              <img
                src="src/assets/img/iconforum2.png"
                className="md:w-4 w-8"
                alt=""
              />
              <p className="md:text-[12px] text-[24px] md:ml-1 ml-4">{date}</p>
            </div>
            <IoIosMore className="text-2xl md:text-sm hidden lg:block" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardForum;
