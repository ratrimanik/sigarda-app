/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
const SidebarMenu = (props) => {
  const { color, image, icon, title, onClick } = props;

  return (
    <div className="">
      <sidebarMenu onClick={onClick}>
        <button>
          <div className="text-[#9A9A9A] flex items-center py-3 -mr-3 pl-4">
            {image && <img src={image} alt="" className="w-4 h-4" />}
            {icon && <div className="text-2xl -ml-1">{icon}</div>}
            <span className={`text-[14px] pl-2 ${color}`}>{title}</span>
          </div>
        </button>
      </sidebarMenu>
    </div>
  );
};

export default SidebarMenu;
