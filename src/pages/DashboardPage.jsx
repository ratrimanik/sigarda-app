import AskLabel from "../components/AskLabel/askLabel";
import Button from "../components/Button/button";
import ButtonHandlerFollow from "../components/Button/handlerfollow";
import CardPost from "../components/CardPost/cardpost";
import { dummyCard } from "../components/CardPost/datacard";
import SideBar from "../components/Sidebar/sidebar";
import Sider from "../components/Sider/sider";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const isOnFollowPath = location.pathname === "/follow";

  return (
    <div className="bg-[#F2F9FF]">
      <div className="flex">
        <div className="sticky top-0 left-0 z-40 w-64 h-screen">
          <SideBar />
        </div>
        <div className=" pt-6">
          <h1 className="text-xl font-bold text-primary">Beranda</h1>
          <div className="flex justify-between">
            <div className="flex pt-4 gap-2">
              <ButtonHandlerFollow />
            </div>
            <div className="flex mt-4 gap-2">
              <Button
                color="bg-[#B7D1E9] items-center h-7"
              >
                <p className="text-primary px-2 text-xs">Tambahkan</p>
                {/* <FaCirclePlus className="text-primary"/> */}
              </Button>
              <img src="src/assets/img/darkmode.png" alt="" className="w-7 h-7"/>
            </div>
          </div>

          <hr className="border border-[#C1DFF5] my-4" />

          <div>
            <AskLabel />
            {dummyCard.map((cardData, index) => {
              const updatedStatus = isOnFollowPath
                ? "Mengikuti"
                : cardData.status;
              return (
                <CardPost
                  key={index}
                  data={{ ...cardData, status: updatedStatus }}
                />
              );
            })}
          </div>
        </div>

        <div className="">
          <Sider />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
