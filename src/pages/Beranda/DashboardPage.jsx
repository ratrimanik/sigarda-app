import AskLabel from "../../components/AskLabel/askLabel";
import Button from "../../components/Button/button";
import ButtonHandlerFollow from "../../components/Button/handlerfollow";
import CardPost from "../../components/CardPostDashboard/cardpost";
import { dummyCard } from "../../components/CardPostDashboard/datacard";
import { useLocation } from "react-router-dom";
import AuthLayout from "../../fragments/authlayout";

const Dashboard = () => {
  const location = useLocation();
  const isOnFollowPath = location.pathname === "/follow";

  const filteredData = dummyCard.filter((card) => {
    return isOnFollowPath
      ? card.status === "Mengikuti"
      : card.status === "Ikuti";
  });

  return (
    <AuthLayout>
      <div className="bg-[#F2F9FF]">
        <div className="flex">
          <div>
            <h1 className="text-xl font-bold text-primary">Beranda</h1>
            <div className="flex justify-between">
              <div className="flex pt-4 gap-2">
                <ButtonHandlerFollow />
              </div>
              <div className="flex mt-4 gap-2">
                <Button color="bg-[#B7D1E9] items-center h-7">
                  <p className="text-primary px-2 text-xs">Tambahkan</p>
                  {/* <FaCirclePlus className="text-primary"/> */}
                </Button>
                <img
                  src="src/assets/img/darkmode.png"
                  alt=""
                  className="w-7 h-7"
                />
              </div>
            </div>

            <hr className="border border-[#C1DFF5] my-4" />

            <div>
              <AskLabel />
              <div>
                {filteredData.map((cardData, index) => (
                  <CardPost key={index} data={cardData} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Dashboard;
