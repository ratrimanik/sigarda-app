/* eslint-disable no-unused-vars */
import { MdClose } from "react-icons/md";
import Card from "./card";
import { dataScroll } from "./datascroll";

const CardScroll = () => {
  return (
    <div className="my-4 ml-4 mr-8 md:mx-0">
      <p className="font-bold md:text-sm text-[28px]">Rekomendasi Topik</p>
      <div className=" flex flex-col  h-full my-2 md:max-w-[650px] w-[820px]">
        <div>
          <div className="overflow-auto scrollbar-hide">
            <div className="flex flex-nowrap space-x-4 mb-2">
              {dataScroll.map((cardData, index) => (
                <Card
                  key={index}
                  title={cardData.title}
                  description={cardData.description}
                  image={cardData.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardScroll;
