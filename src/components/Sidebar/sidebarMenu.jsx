import { NavLink } from "react-router-dom";

/* eslint-disable react/prop-types */
const SidebarMenu = (props) => {
  const { image, icon, title, navigate = null } = props;

  return (
    <sidebarMenu>
      <NavLink
        to={navigate}
        className={({ isActive }) =>
          isActive ? "text-primary" : "text-[#9A9A9A]"
        }
      >
        <div className="md:flex flex-none py-3 items-center -mr-3 pl-4">
          <div className="flex flex-col md:flex-row items-center justify-end">
            {image && (
              <img src={image} alt="" className="md:w-4 md:h-4 w-8 h-8" />
            )}
            {icon && <div className="md:text-2xl text-[32px] md:-ml-1">{icon}</div>}
            <p className="md:text-[14px]  pl-2 text-[26px]  md:mb-0 font-semibold ">
              {title}
            </p>
          </div>
        </div>
      </NavLink>
    </sidebarMenu>
  );
};

export default SidebarMenu;
