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
    <div className="">
      <sidebarMenu>
        <Link to={href} onClick={onClick}>
          <div className={`${isActive ? 'text-primary bg-[#F2F9FF] rounded-l-full' : 'text-[#9A9A9A]'} flex items-center py-3 -mr-3 pl-4`}>
            {image && <img src={image} alt="" className= {`${isActive ? 'text-primary' : 'text-[#9A9A9A]'} w-4 h-4`}/>}
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
