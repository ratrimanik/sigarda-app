import AskLabel from "../../components/Label/askLabel";
import Button from "../../components/Button/button";
import ButtonHandlerFollow from "../../components/Button/handlerfollow";
import CardPost from "../../components/CardPostDashboard/cardpost";
import { dummyCard } from "../../components/CardPostDashboard/datacard";
import { useLocation } from "react-router-dom";
import CardScroll from "../../components/CardScroll/cardscroll";
import { FaCirclePlus } from "react-icons/fa6";
import SidebarLayout from "../../fragments/sidebarlayout";
import NavbarPage from "../../components/HeaderMobile/title";
import HeaderMobile from "../../fragments/headermobile";

const Dashboard = () => {
  const location = useLocation();
  const isOnFollowPath = location.pathname === "/follow";

  const filteredData = dummyCard.filter((card) => {
    return isOnFollowPath
      ? card.status === "Mengikuti"
      : card.status === "Ikuti";
  });

  return (
    <SidebarLayout>
      <div>
        <div className="md:bg-[#F2F9FF] bg-white w-[860px] md:max-w-[680px]">
          <div className="flex">
            <div>
              <div>
                <NavbarPage title="Beranda" />
                <div className="md:hidden">
                  <HeaderMobile />
                  <div className="flex pt-16">
                    <ButtonHandlerFollow />
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex pt-4 gap-2">
                    <ButtonHandlerFollow />
                  </div>
                  <div className="md:flex mt-4 gap-2 hidden xs:block">
                    <Button
                      color="relative bg-[#B7D1E9] items-center h-7 text-primary"
                      icon={
                        <FaCirclePlus className="absolute inset-y-0 right-0 text-[28px]" />
                      }
                    >
                      <p className="pl-2 pr-7 text-xs">Tambahkan</p>
                    </Button>
                    <button>
                      <img
                        src="src/assets/img/filter.png"
                        alt=""
                        className="w-8 h-8 -mt-1"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <hr className="border border-[#C1DFF5] my-4 hidden lg:block" />

              <div>
                <div className="hidden lg:block">
                  <AskLabel />
                </div>
                <div className=" ">
                  {filteredData.map((cardData, index) => {
                    if (cardData.status === "Ikuti" && index === 1) {
                      return (
                        <>
                          <CardScroll />
                          <CardPost key={index} data={cardData} />
                        </>
                      );
                    }
                    return <CardPost key={index} data={cardData} />;
                  })}
                </div>
              </div>
            </div>
          </div>
          <img
            src="src/assets/img/Ads (1).png"
            className="w-[690px]  h-40 -ml-3"
          ></img>
        </div>
      </div>
    </SidebarLayout>
  );
};

export default Dashboard;
