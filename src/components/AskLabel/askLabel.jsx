import { BsFillPCircleFill } from "react-icons/bs";
import { IoCreateOutline } from "react-icons/io5";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import Icon from "./icon";

const AskLabel = () => {
  return (
    <div className="bg-white h-24 mb-4 max-w-3xl px-4 md:max-w-xl rounded-lg shadow-md">
      <div className="flex items-center pt-3">
        <BsFillPCircleFill className="text-3xl text-[#E92A2A] " />
        <input
          type="text"
          className="w-full bg-gray-200 h-8 ml-2 text-sm rounded-full border-gray-200 focus:outline-none text-black"
          placeholder="Apa yang ingin anda tanyakan atau bagikan"
        ></input>
      </div>

      <hr className="my-2"></hr>

      <div className="flex gap-8 ml-4 text-bold">
        <Icon
          icon={<BsFillQuestionCircleFill className="text-primary" />}
          title="Tambah Pertanyaan"
        />
        <Icon
          icon={<IoCreateOutline className="text-primary" />}
          title="Buat Kiriman Informasi"
        />
      </div>
    </div>
  );
};

export default AskLabel;
