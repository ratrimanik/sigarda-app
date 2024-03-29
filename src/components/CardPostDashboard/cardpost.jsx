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
  const [isExpanded, setIsExpanded] = useState(false);

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
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white h-full mb-4 md:px-4 px-8 md:max-w-[650px] md:rounded-lg md:shadow-md">
      <div className="py-4">
        <div className="flex justify-between">
          <div className="flex">
            <img src={profile} alt="" className="md:w-8 md:h-8 w-16" />
            <div className="flex flex-col ml-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="md:text-xs text-2xl font-bold">{name}</p>
                  <button className="md:text-xs text-2xl text-primary font-bold ml-2">
                    {status}
                  </button>
                </div>
              </div>
              <div className="md:text-[12px] md:-mt-1 text-xl text-gray-300 flex">
                <p>{job}</p>
                <span className="mx-1">·</span>
                <p>{date}</p>
              </div>
            </div>
          </div>
          <button className="flex gap-4 text-2xl md:text-sm">
            <IoIosMore />
            <MdClose />
          </button>
        </div>
        <div className=" h-full mb-4 max-w-[650] px-4 md:max-w-2xl  rounded-lg shadow-lg mt-2 ">
          <p className="font-bold md:text-xs text-2xl py-2">{quest}</p>
        </div>
        <div className="md:text-xs text-2xl ">
          <div className="text-justify">
            {isAnswerVisible ? (
              <div>
                {image && (
                  <img src={image} alt="" className="w-full rounded-lg mb-4" />
                )}
                {isAnswerVisible ? answer : `${answer.length > 400}`}
                <button
                  onClick={toggleAnswerAndImage}
                  className="text-[#9A9A9A]"
                >
                  Lihat Lebih Sedikit
                </button>
              </div>
            ) : (
              <div className="flex">
                <div>
                  {isAnswerVisible ? answer : `${answer.substring(0, 300)}`}
                  <button
                    onClick={toggleAnswerAndImage}
                    className="text-primary"
                  >
                    ...Lihat Selengkapnya
                  </button>
                </div>
                {image && (
                  <img
                    src={image}
                    alt=""
                    className="md:w-52 md:h-32 w-80  pl-4 rounded-lg"
                  />
                )}
              </div>
            )}
          </div>
        </div>
        <IconCard />
      </div>
    </div>
  );
};

export default CardPost;
