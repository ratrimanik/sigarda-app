import { Link, useLocation } from "react-router-dom";
import Button from "./button";
import { useState, useEffect } from "react";

const ButtonHandlerFollow = () => {
  const [isFollowActive, setIsFollowActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsFollowActive(location.pathname === "/follow");
  }, [location]);

  
  return (
    // button handler website
    <div>
      <div className="md:flex h-8 hidden"> 
        <Button
          color={
            !isFollowActive
              ? "bg-gradient-to-r from-[#2196F3] to-[#0D2EA1] text-white"
              : "border border-gray-400 text-gray-400 hover:text-primary"
          }
          onClick={() => setIsFollowActive(!isFollowActive)}
        >
          <Link to="/">
            <p className="text-xs px-2">Untuk Anda</p>
          </Link>
        </Button>
        <Button
          color={
            isFollowActive
              ? "bg-gradient-to-r from-[#2196F3] to-[#0D2EA1] text-white"
              : "border border-gray-400 text-gray-400 hover:text-primary"
          }
          onClick={() => setIsFollowActive(!isFollowActive)}
        >
          <Link to="/follow">
            <p className="text-xs px-2">Mengikuti</p>
          </Link>
        </Button>
      </div>

      {/* button handler mobile */}
      <div className="flex h-8 md:hidden mx-28 gap-52">
        <Button
          color={
            !isFollowActive
              ? "underline underline-offset-8 text-[#1565C0]"
              : "text-[#9A9A9A]"
          }
          onClick={() => setIsFollowActive(!isFollowActive)}
        >
          <Link to="/">
            <p className="font-bold text-3xl -mt-12 px-2">Untuk Anda</p>
          </Link>
        </Button>
        <Button
          color={
            isFollowActive
              ? "underline underline-offset-8 text-[#1565C0]"
              : "text-[#9A9A9A]"
          }
          onClick={() => setIsFollowActive(!isFollowActive)}
        >
          <Link to="/follow">
            <p className="font-bold text-3xl -mt-12 px-2">Mengikuti</p>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ButtonHandlerFollow;
