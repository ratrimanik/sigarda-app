/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { IoIosMore } from "react-icons/io";
import { MdClose } from "react-icons/md";
import IconCard from "./iconcard";
import { useState } from "react";

const CardPost = ({ data }) => {
  const [isImageCentered, setIsImageCentered] = useState(false);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const {
    name,
    status,
    job,
    date,
    quest,
    answer,
    image = null,
    profile,
  } = data;

  const toggleAnswerAndImage = () => {
    setIsAnswerVisible(!isAnswerVisible);
    setIsImageCentered(!isImageCentered);
  };

  return (
    <div className="bg-white h-full mb-4 px-4 md:max-w-[650px] rounded-lg shadow-md">
      <div className="py-4 ">
        <div className="flex justify-between">
          <div className="flex">
            <img src={profile} alt="" className="w-8" />
            <div className="flex flex-col ml-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="text-xs font-bold">{name}</p>
                  <p className="text-xs text-primary font-bold ml-2">
                    {status}
                  </p>
                </div>
              </div>
              <div className="text-[10px] text-gray-300 flex">
                <p>{job}</p>
                <span className="mx-1">·</span>
                <p>{date}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <IoIosMore />
            <MdClose />
          </div>
        </div>
        <div className=" h-full mb-4 max-w-md px-4 md:max-w-2xl rounded-lg shadow-lg mt-2 border">
          <p className="font-bold text-xs py-2">{quest}</p>
        </div>
        <div className="flex">
          <div className={`flex ${isImageCentered ? "justify-center" : ""}`}>
            <div className="text-xs pl-2">
              <div className="text-justify">
                {isAnswerVisible ? answer : `${answer.substring(0, 400)}`}
                {answer.length > 400 && (
                  <button
                    onClick={toggleAnswerAndImage}
                    className={`mt-2 ${
                      isAnswerVisible ? "text-[#9A9A9A]" : "text-primary"
                    }`}
                  >
                    {isAnswerVisible
                      ? "Tampilkan Lebih Sedikit"
                      : "...Lihat Selengkapnya"}
                  </button>
                )}
              </div>
            </div>
            {image && (
              <img
                src={image}
                alt=""
                className="w-full h-auto pl-4 rounded-lg"
              />
            )}
          </div>
        </div>
        <IconCard />
      </div>
    </div>
  );
};

export default CardPost;
