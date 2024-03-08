import SidebarMenu from "../components/Sidebar/sidebarMenu";
import { BsFillPCircleFill } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import SiderForum from "../components/SiderForum/siderForum";
import { IoArrowBackSharp } from "react-icons/io5";

const HeaderMobile = () => {
  const location = useLocation();
  const isJelajahiPage = location.pathname === "/jelajahi";
  const isQuestionPage = location.pathname === "/question";
  const isForYouPage = location.pathname === "/foryou";
  const isDrafPage = location.pathname === "/draf";
  const isDashboardPage = location.pathname === "/";
  const isFollowPage = location.pathname === "/follow";
  const isNotifikasiPage = location.pathname === "/notif";

  return (
    <div className="md:hidden fixed top-0 left-0 w-full bg-white z-50 justify-between items-center px-12 py-4 flex">
      <div className="flex justify-between w-full mr-4">
        {isNotifikasiPage ? (
          <div>
            <IoArrowBackSharp className="text-[50px]"/>
          </div>
        ) : (
          <div>
            <SidebarMenu
              navigate="/profil"
              icon={<BsFillPCircleFill className="text-primary text-[50px]" />}
            />
          </div>
        )}
        <div>
          {isJelajahiPage || isQuestionPage || isForYouPage || isDrafPage ? (
            <div className="flex justify-between">
              <div className="relative md:mb-6 w-[550px] mr-4 mt-3">
                <input
                  type="text"
                  className="w-full pl-16 h-12 text-[24px] border-white shadow-md rounded-full focus:outline-none text-black "
                  placeholder="Cari di Sigarda"
                />
                <IoSearchOutline className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 text-3xl" />
              </div>
              <div>
                <button>
                  <img
                    src="src/assets/img/filter_mobile.png"
                    alt=""
                    className="w-12 h-12 mt-3"
                  />
                </button>
              </div>
            </div>
          ) : isDashboardPage || isFollowPage ? (
            <div className="flex gap-48 mr-4 mt-3">
              <img
                src="/src/assets/img/logo-sigarda.png"
                alt="Logo"
                className="w-48 h-10 mt-2"
              />
              <SidebarMenu navigate="/notif" image="src/assets/img/notif.png" />
            </div>
          ) : isNotifikasiPage ? (
            <div>
              <p className="mr-72 text-3xl font-bold">Notifikasi</p>
            </div>
          ) : (
            <div className="flex justify-between gap-8">
              <SiderForum />
              <div>
                <button>
                  <img
                    src="src/assets/img/filter_mobile.png"
                    alt=""
                    className="w-12 h-12 mt-3"
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
