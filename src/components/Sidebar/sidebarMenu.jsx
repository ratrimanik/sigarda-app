/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const SidebarMenu = (props) => {
  const { 
    image, 
    icon, 
    href, 
    title,
    isActive,
    onClick
  } = props;

  return (
    <div className="pl-5 py-3">
      <sidebarMenu>
        <Link to={href} onClick={onClick}>
          <div className={`${isActive ? 'text-primary' : 'text-[#9A9A9A]'} flex items-center`}>
            {image && <img src={image} alt="" className="w-4 h-4" />}
            {icon && <div className="text-2xl -ml-1">{icon}</div>}
            <span className="text-[14px] pl-2">{title}</span>
            {/* <div className="text-[14px] pl-2">{title}</div> */}
          </div>
        </Link>
      </sidebarMenu>
    </div>
  );
};

export default SidebarMenu;
