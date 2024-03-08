import { NavLink } from "react-router-dom";

const ButtonHandlerQuestion = () => {
  return (
    <div>
      <div className="hidden md:flex pt-4 gap-2 text-xs text-gray-400">
        <NavLink
          to="/question"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold"
              : "text-[#9A9A9A] font-semibold"
          }
        >
          Pertanyaan Anda
        </NavLink>
        <NavLink
          to="/foryou"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold"
              : "text-[#9A9A9A] font-semibold"
          }
        >
          Untuk Anda
        </NavLink>
        <NavLink
          to="/draf"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold"
              : "text-[#9A9A9A] font-semibold"
          }
        >
          Draft
        </NavLink>
      </div>
      <div className="md:hidden flex mx-20 gap-16 pt-2 text-gray-400 w-[580px]">
        <NavLink
          to="/question"
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-8 text-[#1565C0]"
              : "text-[#9A9A9A] font-semibold"
          }
        >
          <p className="font-bold text-3xl whitespace-nowrap">Pertanyaan Anda</p>
        </NavLink>
        <NavLink
          to="/foryou"
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-8 text-[#1565C0]"
              : "text-[#9A9A9A] font-semibold"
          }
        >
          <p className="font-bold text-3xl whitespace-nowrap">Untuk Anda</p>
        </NavLink>
        <NavLink
          to="/draf"
          className={({ isActive }) =>
            isActive
              ? "underline underline-offset-8 text-[#1565C0]"
              : "text-[#9A9A9A] font-semibold"
          }
        >
          <p className="font-bold text-3xl whitespace-nowrap">Draft</p>
        </NavLink>
      </div>
    </div>
  );
};

export default ButtonHandlerQuestion;
