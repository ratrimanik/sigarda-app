/* eslint-disable react/no-unescaped-entities */
const CardPost = () => {
  return (
    <div className="bg-white h-full mb-4 max-w-md px-4 md:max-w-xl rounded-lg shadow-md">
      <div className="py-4">
        <div className="flex">
          <img src="src/assets/img/profile2.png" alt="" className="w-8" />
          <div className="flex flex-col ml-2">
            <div className="flex items-center">
              <p className="text-xs font-bold">Firah Azis</p>
              <p className="text-xs text-primary font-bold ml-2">Ikuti</p>
            </div>
            <p className="text-[10px] text-gray-300">
              Professional Babu Kucing Sejak 20 Tahun yang lalu
            </p>
          </div>
        </div>
        <div className="border border-gray-300 h-full mb-4 max-w-md px-4 md:max-w-xl rounded-lg shadow-md mt-2">
          <p className="font-bold text-xs py-2">
            Bolehkah saya jawab "100 juta perbulan" jika ditanya gaji yang
            diharapkan saat interview?
          </p>
        </div>
        <div className="flex">
          <div className="text-xs pl-4">
            <p className="mb-4">Saya jadi pengen jawab.</p>
            <div>
              Sekitar 5-6 tahun lalu, saya diajak ngobrol oleh seorang teman,
              saat itu teman saya membawa rekannya. Bule, umurnya sekitar late
              40 atau early 50 lah. Teman saya itu memperkenalkan bule itu
              sebagai rekan kerjanya yg baru. Suasana lounge saat itu berisik,
              Tapi tidak hingar bingar. Masih cukup untuk mendengarkan apa yang
              lawan bicara... Lihat Selengkapnya
            </div>
          </div>
          <img
            src="src/assets/img/post-image.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
        <div className="ml-4 pt-4 flex justify-between">
          <div className="flex gap-8 w-4 h-4">
            <img src="src/assets/img/rate-plus.png" alt="" />
            <img src="src/assets/img/rate-min.png" alt="" />
            <img src="src/assets/img/comment.png" alt="" />
            <img src="src/assets/img/share.png" alt="" />
          </div>
          <div className="flex w-4 h-4 mr-4">
            <img src="src/assets/img/preview.png" alt=""/>
            <img src="src/assets/img/save.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPost;
