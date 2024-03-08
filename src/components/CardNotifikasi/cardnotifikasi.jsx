/* eslint-disable react/prop-types */
const CardNotifikasi = (props) => {
    const {
        image,
        name,
        description,
        date,
        quest,
    } = props;

  return (
    <div className="bg-white h-full md:text-[12px] text-[20px] mb-4 px-4 rounded-lg shadow-md border border-primary md:border-none">
      <div className="flex justify-between py-2">
        <div className="flex items-center md:items-start">
          <img
            src={image}
            className="md:w-10 md:h-10 w-20 h-20 rounded-full"
          />
          <div className="flex flex-col md:-ml-2 ml-4">
            <div className="flex justify-between">
              <div className="flex ml-4">
                <p className="font-bold">{name}</p>
                <p className="ml-2">{description}</p>
              </div>
              <div className="hidden lg:block">
                <p>{date}</p>
              </div>
            </div>
            <div className="md:border mt-2 md:border-[#9A9A9A] rounded-md mx-4">
              <p className="md:mx-2 my-2 font-semibold">
                {quest}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNotifikasi;
