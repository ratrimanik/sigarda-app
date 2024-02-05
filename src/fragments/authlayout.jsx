/* eslint-disable react/prop-types */
import SideBar from "../components/Sidebar/sidebar";
import Sider from "../components/SiderBeranda/sider";

const AuthLayout = ({ children }) => {
  return (
    <div className="bg-[#F2F9FF]">
      <div className="flex">
        <div className="sticky top-0 left-0 z-40 w-64 h-screen">
          <SideBar />
        </div>
        <div className="pt-6">
          {children}
        </div>
        <div className="">
          <Sider />
        </div>
      </div>
    </div>
 );
}

export default AuthLayout;