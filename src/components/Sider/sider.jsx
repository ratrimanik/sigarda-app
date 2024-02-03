/* eslint-disable react/no-children-prop */
import { IoSearchOutline } from "react-icons/io5";
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";
import IconSider from "./iconSider";
import DropDown from "./dropdown";
import Header from "./header";
import Profile from "./profile";
import Button from "../Button/button";

const Sider = () => {
  return (
    <div className="w-64 pl-12">
      <div className="relative mt-16">
        <input
          type="text"
          className="w-64 pl-12 h-8 bg-white border-white shadow-md text-sm rounded-full focus:outline-none text-black"
          placeholder="Cari di Sigarda"
        />
        <IoSearchOutline className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" />
      </div>

      <div className="bg-white border-white shadow-md rounded-lg mt-4 w-64">
        <Header
          image="src/assets/img/pertanyaan-teratas.png"
          title="Pertanyaan Teratas"
        />

        <hr className="mt-1" />

        <div className="pb-2">
          <div>
            <IconSider
              icon={<Bs1CircleFill className="text-[#FAA916]" />}
              text="Apa saja jalur masuk PTN dan syaratnya?"
              children="20 rb jawaban"
            />
          </div>
          <div>
            <IconSider
              icon={<Bs2CircleFill className="text-[#2196F3]" />}
              text="Pendidikan Non Formal yang berkualitas apakah bisa didapatkan?"
              children="19 rb jawaban"
            />
          </div>
          <div>
            <IconSider
              icon={<Bs3CircleFill className="text-[#D63230]" />}
              text="Bagaimana pendapatmu tentang bekerja di bidang IT, di mana kita bekerja dari pagi sampai sore, dan malamnya melanjutkan pekerjaannya lagi?"
              children="15 rb jawaban"
            />
          </div>
        </div>
      </div>

      <div className="bg-white border-white shadow-md rounded-lg my-4 w-64">
        <Header
          image="src/assets/img/penulis-terbaik.png"
          title="Penulis Terbaik"
        />

        <DropDown />

        <hr className="mt-1" />

        <div className="pb-2">
          <Profile
            image="src/assets/img/Profile.png"
            name="Aditya Pratama"
            address="Bandung, Jawa Barat, Indonesia"
            followers="20 jt pengikut"
            points="33657 poin"
          />

          <hr className="mt-2" />

          <Profile
            image="src/assets/img/Profile.png"
            name="Lathifuddin Siddiq"
            address="Surabaya, Jawa Timur, Indonesia"
            followers="20 jt pengikut"
            points="33657 poin"
          />

          <hr className="mt-2" />

          <Profile
            image="src/assets/img/Profile.png"
            name="Maritza Retno"
            address="Karimun, Jawa Timur, Indonesia"
            followers="20 jt pengikut"
            points="33657 poin"
          />
        </div>

        <div className="flex items-center justify-center py-4">
          <Button
            color="text-[#2196F3] text-xs font-bold"
            children="LIHAT LEBIH"
          />
        </div>
      </div>
    </div>
  );
};

export default Sider;