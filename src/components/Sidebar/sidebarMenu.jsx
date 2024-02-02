/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
const SidebarMenu = (props) => {
  const { image, icon, href, title } = props;

  return (
    <div className="pl-5 py-3">
      <sidebarMenu className="">
        <a href={href}>
          <div className="flex text-[#9A9A9A] items-center">
            {image && <img src={image} alt="" className="w-4 h-4" />}
            {icon && <div className="text-2xl -ml-1">{icon}</div>}
            <div className="text-[14px] pl-2">{title}</div>
          </div>
        </a>
      </sidebarMenu>
    </div>
  );
};

export default SidebarMenu;
