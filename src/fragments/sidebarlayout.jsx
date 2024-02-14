/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import { BsFillPCircleFill } from "react-icons/bs";
import Sider from "../components/SiderBeranda/sider";
import SidebarMenu from "../components/Sidebar/sidebarMenu";
import Dashboard from "../pages/Beranda/DashboardPage";
import QuestionPage from "../pages/Pertanyaan/QuestionPage";
import { useNavigate } from "react-router-dom";
import Forum from "../pages/Forum/forum";

const SidebarLayout = ({ children }) => {
  const navigate = useNavigate();
  const content = [Dashboard, null, QuestionPage, Forum, null];
  const [currentIndex, setCurrentIndex] = useState(0);

  const [activePage, setActivePage] = useState("");

  const handleMenuItemClick = (pageTitle) => {
    setActivePage(pageTitle);
  };

  return (
    <div className="bg-[#F2F9FF]">
      <div className="flex">
        <div className="sticky top-0 left-0 z-40 w-64 h-screen">
          <Sidebar
            className="bg-white dark:bg-gray-800 shadow-lg fixed top-0 left-0 w-52 h-screen z-40"
            aria-label="Sidebar with logo branding example"
          >
            <div className="pl-2">
              <Sidebar.Logo className="w-24">
                <img src="/src/assets/img/logo-sigarda.png" alt="Logo" />
              </Sidebar.Logo>
              <Sidebar.Items className="text-sm font-medium">
                <Sidebar.ItemGroup>
                  <Sidebar.Item className="text-primary font-bold">
                    Menu
                  </Sidebar.Item>
                  <SidebarMenu
                    color={
                      currentIndex == 0
                        ? "text-primary"
                        : "text-[#9A9A9A]"
                    }
                    image="src/assets/img/beranda.png"
                    title="Beranda"
                    isActive={activePage === "Beranda"}
                    onClick={() =>

                      {navigate('/')
                        setCurrentIndex(0)}
                    }
                  />
                  <SidebarMenu
                    color={
                      currentIndex == 1
                        ? "text-primary"
                        : "text-[#9A9A9A]"
                    }
                    image="src/assets/img/jelajahi.png"
                    title="Jelajahi"
                    isActive={activePage === "Jelajahi"}
                    onClick={() =>
                      {navigate('/')
                        setCurrentIndex(1)}
                    }
                  />
                  <SidebarMenu
                    color={
                      currentIndex == 2
                        ? "text-primary"
                        : "text-[#9A9A9A]"
                    }
                    image="src/assets/img/tanya.png"
                    title="Pertanyaan"
                    isActive={activePage === "Pertanyaan"}
                    onClick={() =>
                      {navigate('/question')
                        setCurrentIndex(2)}
                    }
                  />
                  <SidebarMenu
                    color={
                      currentIndex == 3
                        ? "text-primary"
                        : "text-[#9A9A9A]"
                    }
                    image="src/assets/img/forum.png"
                    title="Forum"
                    isActive={activePage === "Forum"}
                    onClick={() =>
                      {navigate('/')
                        setCurrentIndex(3)}
                    }
                  />
                  <SidebarMenu
                    color={
                      currentIndex == 4
                        ? "text-primary"
                        : "text-[#9A9A9A]"
                    }
                    image="src/assets/img/notif.png"
                    title="Notifikasi"
                    isActive={activePage === "Notifikasi"}
                    onClick={() =>
                      {navigate('/')
                        setCurrentIndex(4)}
                    }
                  />
                </Sidebar.ItemGroup>
                <div className="pt-24">
                  <SidebarMenu
                    icon={<BsFillPCircleFill className="text-primary" />}
                    title="Profil"
                  />
                  <SidebarMenu
                    image="src/assets/img/more.png"
                    title="Lebih banyak"
                  />
                </div>
              </Sidebar.Items>
            </div>
          </Sidebar>
        </div>
        <div className="pt-6">
          {children ? children : content[currentIndex]()}
        </div>
        <div className="">
          <Sider />
        </div>
      </div>
    </div>
  );
};

export default SidebarLayout;
