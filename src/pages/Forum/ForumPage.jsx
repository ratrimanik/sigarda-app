import SidebarLayout from "../../fragments/sidebarlayout";
import { IoSearchOutline } from "react-icons/io5";
import { FaSquarePlus } from "react-icons/fa6";
import LastSearch from "../../components/PencarianTerakhir/lastSearch";
import CardForum from "../../components/CardForum/cardForum";
import NavbarPage from "../../components/HeaderMobile/title";
import HeaderMobile from "../../fragments/headermobile";

const ForumPage = () => {
  return (
    <SidebarLayout>
      <div className="md:w-[650px] w-[868px] mb-36">
        <div className="md:bg-[#F2F9FF] bg-white md:px-0 px-10">
          <div>
            <NavbarPage title="Forum" />
            <HeaderMobile />
            <div className="md:mt-0 mt-20 md:px-0">
              <div className="flex gap-4 mt-3 w-[730px] md:w-full">
                <div className="relative mb-4 w-full mr-2">
                  <input
                    type="text"
                    className="w-full pl-16 md:pl-12 md:h-8 h-12 border-white shadow-md md:text-sm text-[24px] rounded-full focus:outline-none text-black"
                    placeholder="Cari Forum"
                  />
                  <IoSearchOutline className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 md:text-[16px] text-3xl" />
                </div>
                <div className="hidden lg:block">
                  <button className="rounded-lg relative bg-white shadow-xl items-center w-32 h-8">
                    <FaSquarePlus className="absolute top-1/2 transform -translate-y-1/2 right-2 w-7 h-7 text-primary" />
                    <p className="-ml-4 mr-4  text-[14px] text-[#9A9A9A]">
                      Buat forum
                    </p>
                  </button>
                </div>
              </div>
              <div className="bg-white h-full mb-4 px-4 rounded-lg shadow-md">
                <p className="md:text-[12px] text-[28px] md:font-semibold font-bold md:pt-2">
                  Pencarian Terakhir
                </p>
                <div className="mt-2">
                  <LastSearch title="Design Grafis" />
                  <LastSearch title="UI UX" />
                  <LastSearch title="Pengembangan Aplikasi" />
                  <LastSearch title="Mobile Developer" />
                  <LastSearch title="Web Developer" />
                </div>
              </div>

              <p className="md:text-[12px] text-[28px] md:pt-0 pt-4 md:font-semibold font-bold mb-2">
                Forum yang Anda Buat
              </p>
              <div className="md:grid md:grid-cols-2 md:gap-4">
                <CardForum
                  image="src/assets/img/uiux.png"
                  title="UI UX Design"
                  description="Forum untuk membahas, problematika UI UX Designer, dan yang ingin belajar UI UX Design"
                  date="2 Hari yang lalu"
                />
                <CardForum
                  image="src/assets/img/nonprofile.png"
                  title="Mobile Developer"
                  description="Forum untuk membahas, pengembangan aplikasi dengan menggunakan kotlin dan flutter"
                  date="1 jam yang lalu"
                />
              </div>
              <p className="md:text-[12px] text-[28px] md:pt-0 pt-4 md:font-semibold font-bold my-2">
                Forum yang Anda Ikuti
              </p>
              <div className="md:grid md:grid-cols-2 md:gap-4">
                <CardForum
                  image="src/assets/img/iconforum.png"
                  title="Graphic Design"
                  description="Forum untuk membahas, tips dan trick serta keluh kesah yang dalam dunia design grafis"
                  date="2 menit yang lalu"
                />
                <CardForum
                  image="src/assets/img/freelance.png"
                  title="Freelance Graphic Des..."
                  description="Forum untuk membahas, keluh kesah freelance serta memberikan informasi lowongan freelance"
                  date="1 jam yang lalu"
                />
                <CardForum
                  image="src/assets/img/nonprofile.png"
                  title="Siswa Ambis"
                  description="Tempat berkumpulnya siswa untuk mengambis secara  sehat"
                  date="2 hari yang lalu"
                />
                <CardForum
                  image="src/assets/img/ilmu.png"
                  title="Ilmu Baru Hari Ini"
                  description="Hanya sebuah ruang tempat saya membagikan konten yang saya rasa bermanfaat"
                  date="2 hari yang lalu"
                />
                <CardForum
                  image="src/assets/img/nonprofile.png"
                  title="Belajar Trading"
                  description="Disini kita akan belajar trading bersama dan sesuai banget untuk pemula..."
                  date="3 jam yang lalu"
                />
                <CardForum
                  image="src/assets/img/Metaverse.png"
                  title="Metaverse Technology"
                  description="Forum untuk membahas perkembangan teknologi metaverse saat ini."
                  date="1 jam yang lalu"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default ForumPage;
