/* eslint-disable react/prop-types */
import SideBar from "../components/Sidebar/sidebar";
import SiderForum from "../components/SiderForum/siderForum";

const ForumLayout = ({ children }) => {
  return (
    <div className="bg-[#F2F9FF]">
      <div className="flex">
        <div className="sticky top-0 left-0 z-40 w-64 h-screen">
          <SideBar />
        </div>
        <div className="pt-6">{children}</div>
        <div className="">
          <SiderForum />
        </div>
      </div>
    </div>
  );
};

export default ForumLayout;
