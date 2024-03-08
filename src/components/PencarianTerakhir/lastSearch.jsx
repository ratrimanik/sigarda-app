/* eslint-disable react/prop-types */
import { MdClose } from "react-icons/md";

const LastSearch = (props) => {
  const { title } = props;

  return (
    <div className="md:my-2 my-4">
      <div className="flex text-[#9A9A9A] items-center md:text-xs text-2xl font-semibold justify-between">
        <div className="flex gap-2">
          <img src="src/assets/img/iconforum2.png" alt="" className="md:w-5 md:h-4 w-8"/>
          <p className="md:pl-0 pl-2">{title}</p>
        </div>
        <MdClose className="md:text-[16px] text-[28px]"/>
      </div>
      <hr className="mt-2"/>
    </div>
  );
};

export default LastSearch;