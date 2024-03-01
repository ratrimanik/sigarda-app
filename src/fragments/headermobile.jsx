import SidebarMenu from "../components/Sidebar/sidebarMenu";
import { BsFillPCircleFill } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";

const HeaderMobile = () => {
  const location = useLocation();
  const isJelajahiPage = location.pathname === "/jelajahi";
  const isQuestionPage = location.pathname === "/question";
  const isForYouPage = location.pathname === "/foryou";
  const isDrafPage = location.pathname === "/draf";

  return (
    <div className="flex items-center">
      <div className="px-8">
        <SidebarMenu
          navigate="/profil"
          icon={<BsFillPCircleFill className="text-primary" />}
        />
      </div>
      <div>
        {isJelajahiPage || isQuestionPage || isForYouPage || isDrafPage ? (
          <div className="flex justify-between">
            <div className="relative mb-6 w-[600px] mx-4 mt-5">
              <input
                type="text"
                className="w-full pl-12 h-8 border-white shadow-md text-sm rounded-full focus:outline-none text-black"
                placeholder="Cari di Sigarda"
              />
              <IoSearchOutline className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <div>
              <button>
                <img
                  src="src/assets/img/filter_mobile.png"
                  alt=""
                  className="w-9 h-8 md:mt-0 mt-5"
                />
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <img
              src="/src/assets/img/logo-sigarda.png"
              alt="Logo"
              className="w-32 h-10 mt-2"
            />
            <SidebarMenu navigate="/notif" image="src/assets/img/notif.png" />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderMobile;
