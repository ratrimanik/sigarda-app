import LastSearch from "../../components/PencarianTerakhir/lastSearch";
import SidebarLayout from "../../fragments/sidebarlayout";
import { IoSearchOutline } from "react-icons/io5";
import JelajahiItem from "../../components/Jelajahi/jelajahiItem";
import { dummyCard } from "../../components/CardPostDashboard/datacard";
import CardPost from "../../components/CardPostDashboard/cardpost";

import NavbarPage from "../../components/HeaderMobile/title";
import HeaderMobile from "../../fragments/headermobile";

const JelajahiPage = () => {
  const selectedData = dummyCard[4];

  return (
    <SidebarLayout>
      <div className="md:max-w-[650px] w-[800px] px-2">
        <div className="md:bg-[#F2F9FF] bg-black ">
          <div>
            <NavbarPage title="Jelajahi" />
            <div>
              <div className="md:flex hidden">
                <div className="relative mb-4 w-full mr-4">
                  <input
                    type="text"
                    className="w-full pl-12 h-8 border-white shadow-md text-sm rounded-full focus:outline-none text-black"
                    placeholder="Cari Forum"
                  />
                  <IoSearchOutline className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500" />
                </div>
                <div>
                  <button>
                    <img
                      src="src/assets/img/filter.png"
                      alt=""
                      className="w-9 h-8"
                    />
                  </button>
                </div>
              </div>

              <div className="md:hidden fixed top-0 left-0 w-full bg-white justify-between items-center px-4 py-4">
                <HeaderMobile />
              </div>
            </div>

            <div className="bg-black h-full mb-4 px-4  md:mt-0 mt-32 rounded-md border">
              <p className="text-[12px] font-semibold pt-2">
                Pencarian Terakhir
              </p>
              <div className="mt-2">
                <LastSearch title="Design Grafis" />
                <LastSearch title="UI UX" />
              </div>
            </div>
            <div className="bg-white h-full mb-4 px-4">
              <p className="text-primary font-bold text-sm py-2">
                Tren Topik untuk Anda
              </p>
              <JelajahiItem title="Artificial Intelligence" vote="120jt vote" />
              <JelajahiItem title="Politik Indonesia" vote="100jt vote" />
              <JelajahiItem title="Pilpres 2024" vote="80jt vote" />
              <JelajahiItem title="Mahkamah Konstitusi" vote="10jt vote" />
            </div>
          </div>
          <div>
            <CardPost data={selectedData} />
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default JelajahiPage;
