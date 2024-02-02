/* eslint-disable no-unused-vars */
import React from "react";
import { Sidebar } from "flowbite-react";
import { BsFillPCircleFill } from "react-icons/bs";
import SidebarMenu from "./sidebarMenu";

const SideBar = () => {
  return (
    <Sidebar
      className="bg-white dark:bg-gray-800 shadow-lg fixed top-0 left-0 w-56 h-screen z-40"
      aria-label="Sidebar with logo branding example"
    >
      <div className="pl-4">
        <Sidebar.Logo className="w-24">
          <img src="/src/assets/img/logo-sigarda.png" alt="Logo" />
        </Sidebar.Logo>
        <Sidebar.Items className="text-sm font-medium">
          <Sidebar.ItemGroup>
            <Sidebar.Item className="text-primary font-bold">Menu</Sidebar.Item>
            <SidebarMenu
              image="src/assets/img/beranda.png"
              href="/"
              title="Beranda"
            />
            <SidebarMenu
              image="src/assets/img/jelajahi.png"
              href="/"
              title="Jelajahi"
            />
            <SidebarMenu
              image="src/assets/img/tanya.png"
              href="/"
              title="Pertanyaan"
            />
            <SidebarMenu
              image="src/assets/img/forum.png"
              href="/"
              title="Forum"
            />
            <SidebarMenu
              image="src/assets/img/notif.png"
              href="/"
              title="Notifikasi"
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
  );
};

export default SideBar;
