import { Link } from "react-router-dom";
import Button from "./button";
import { useState } from "react";

const ButtonHandlerFollow = () => {
 const [isUntukAndaClicked, setIsUntukAndaClicked] = useState(false);
 const [isMengikutiClicked, setIsMengikutiClicked] = useState(false);

 return (
    <div className="flex gap-2">
      <Button
        color={
          isUntukAndaClicked
            ? "bg-primary text-white"
            : "border border-gray-300"
        }
        onClick={() => setIsUntukAndaClicked(!isUntukAndaClicked)}
      >
        <Link to="/">
          <p className="px-2 text-xs h-7 flex items-center">Untuk anda</p>
        </Link>
      </Button>
      <Button
        color={
          isMengikutiClicked
            ? "bg-primary text-white"
            : "border border-gray-300"
        }
        onClick={() => setIsMengikutiClicked(!isMengikutiClicked)}
      >
        <Link to="/follow">
          <p className="px-2 text-xs">Mengikuti</p>
        </Link>
      </Button>
    </div>
 );
};

export default ButtonHandlerFollow;