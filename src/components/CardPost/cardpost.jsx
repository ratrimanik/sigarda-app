import { IoCloseSharp } from "react-icons/io5";
import { TbArrowBigUp } from "react-icons/tb";
import { TbArrowBigDown } from "react-icons/tb";
import { FaRegComment } from "react-icons/fa6";
import { TfiReload } from "react-icons/tfi";
import Button from "../Button/button";

const CardPost = () => {
    return (
        <div>
          <div className="flex bg-white  mb-8 max-w-md md:max-w-xl border">
            <div className="flex items-start px-4 py-4">
              <img
                className="w-10 h-10 rounded-full object-cover  mr-2 shadow"
                src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />
              <div className="">
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <a href="" className="font-semibold">
                      Matin Rajab
                    </a>
                    <span className="mx-1">·</span>
                    <a href="" className="text-blue-600">
                      Ikuti
                    </a>
                  </div>
                  <p className="text-lg text-gray-700">
                    <IoCloseSharp />
                  </p>
                </div>
                <div className="text-sm text-gray-700">
                  <a href="">Belajar di MIPA SMANSA (Lulus 2022)</a>
                  <span className="mx-1">·</span>
                  <a href=""> 3thn</a>
                </div>
                <p className="font-bold mt-2">Ini Berisi Judul Artikel</p>
                <p className=" text-gray-700 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                  esse, nisi dolor maxime pariatur aperiam labore cupiditate quo
                  voluptatem tempore fugiat. Atque accusamus nulla necessitatibus
                  quas suscipit incidunt culpa perspiciatis.
                </p>
                <img src="image/banjir.jpg" className="pt-2"></img>
                <div className="mt-4 flex items-center text-xl gap-4">
                  <div className="divide-x border rounded-full">
                    <div>
                      <Button color="bg-gray-100" className="flex">
                        <a href="" className="flex my-1">
                          <TbArrowBigUp className="text-blue-600" />
                          <div className="flex text-sm text-black ml-2">
                            <p className="">Dukung Naik</p>
                            <span className="mx-1">·</span>
                            <p className="">18,4k</p>
                          </div>
                          <TbArrowBigDown className="ml-2 text-black" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div>
                    <FaRegComment />
                  </div>
                  <div>
                    <TfiReload />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex bg-white mb-16 max-w-md md:max-w-xl border">
            <div className="flex items-start px-4 py-4">
              <img
                className="w-10 h-10 rounded-full object-cover  mr-2 shadow"
                src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt="avatar"
              />
              <div className="">
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <a href="" className="font-semibold">
                      Matin Rajab
                    </a>
                    <span className="mx-1">·</span>
                    <a href="" className="text-blue-600">
                      Ikuti
                    </a>
                  </div>
                  <p className="text-lg text-gray-700">
                    <IoCloseSharp />
                  </p>
                </div>
                <div className="text-sm text-gray-700">
                  <a href="">Belajar di MIPA SMANSA (Lulus 2022)</a>
                  <span className="mx-1">·</span>
                  <a href=""> 3thn</a>
                </div>
                <p className="font-bold mt-2">Ini Berisi Judul Artikel</p>
                <p className=" text-gray-700 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
                  esse, nisi dolor maxime pariatur aperiam labore cupiditate quo
                  voluptatem tempore fugiat. Atque accusamus nulla necessitatibus
                  quas suscipit incidunt culpa perspiciatis.
                </p>
                <img src="image/banjir.jpg" className="pt-2"></img>
                <div className="mt-4 flex items-center text-xl gap-4">
                  <div className="divide-x border rounded-full">
                    <div>
                      <Button color="bg-gray-100" className="flex">
                        <a href="" className="flex my-1">
                          <TbArrowBigUp className="text-blue-600" />
                          <div className="flex text-sm text-black ml-2">
                            <p className="">Dukung Naik</p>
                            <span className="mx-1">·</span>
                            <p className="">18,4k</p>
                          </div>
                          <TbArrowBigDown className="ml-2 text-black" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div>
                    <FaRegComment />
                  </div>
                  <div>
                    <TfiReload />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      );
}

export default CardPost;