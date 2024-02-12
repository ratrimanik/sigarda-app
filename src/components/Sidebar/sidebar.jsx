/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Sidebar } from "flowbite-react";
import { BsFillPCircleFill } from "react-icons/bs";
import SidebarMenu from "./sidebarMenu";

const SideBar = () => {
  const [activePage, setActivePage] = useState("");

  const handleMenuItemClick = (pageTitle) => {
    setActivePage(pageTitle);
  };

  return (
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
            <Sidebar.Item className="text-primary font-bold">Menu</Sidebar.Item>
            <SidebarMenu
              image="src/assets/img/beranda.png"
              href="/"
              title="Beranda"
              isActive={activePage === "Beranda"}
              onClick={() => handleMenuItemClick('Beranda')}
            />
            <SidebarMenu
              image="src/assets/img/jelajahi.png"
              href="/"
              title="Jelajahi"
              isActive={activePage === "Jelajahi"}
              onClick={() => handleMenuItemClick('Jelajahi')}
            />
            <SidebarMenu
              image="src/assets/img/tanya.png"
              href="/question"
              title="Pertanyaan"
              isActive={activePage === "Pertanyaan"}
              onClick={() => handleMenuItemClick('Pertanyaan')}
            />
            <SidebarMenu
              image="src/assets/img/forum.png"
              href="/forum"
              title="Forum"
              isActive={activePage === "Forum"}
              onClick={() => handleMenuItemClick('Forum')}
            />
            <SidebarMenu
              image="src/assets/img/notif.png"
              href="/"
              title="Notifikasi"
              isActive={activePage === "Notifikasi"}
              onClick={() => handleMenuItemClick('Notifikasi')}
            />
          </Sidebar.ItemGroup>
          <div className="pt-24">
            <SidebarMenu
              icon={<BsFillPCircleFill className="text-primary" />}
              title="Profil"
            />
            <SidebarMenu image="src/assets/img/more.png" title="Lebih banyak" />
          </div>
        </Sidebar.Items>
      </div>
    </Sidebar>
  );
};

export default SideBar;
