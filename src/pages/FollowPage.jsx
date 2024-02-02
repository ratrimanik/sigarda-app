import AskLabel from "../components/AskLabel/askLabel";
import Button from "../components/Button/button";
import ButtonHandlerFollow from "../components/Button/handlerfollow";
import CardPost from "../components/CardPost/cardpost";
import SideBar from "../components/Sidebar/sidebar";
import Sider from "../components/Sider/sider";

const FollowPage = () => {
  return (
    <div className="bg-[#F2F9FF]">
      <div className="flex">
        <div className="sticky top-0 left-0 z-40 w-64 h-screen">
          <SideBar />
        </div>
        <div className="px-12 pt-6">
          <h1 className="text-xl font-bold text-primary">Beranda</h1>
          <div className="flex">
            <div className="flex pt-4 gap-2">
              <ButtonHandlerFollow />
              <div className="flex">
                <Button
                  color="bg-[#B7D1E9] items-center justify-between"
                  className="flex"
                >
                  <p className="text-primary px-2 text-xs">Tambahkan</p>
                  {/* <AiFillPlusCircle className="absolute justify-end top-16 text-2xl text-primary" /> */}
                </Button>
              </div>
            </div>
          </div>

          <hr className="border border-[#C1DFF5] my-4" />

          <div className="">
            <AskLabel />
            <CardPost />
          </div>
        </div>

        <div className="">
          <Sider />
          Ratri
        </div>
      </div>
    </div>
  );
};

export default FollowPage;
