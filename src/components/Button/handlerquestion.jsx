import { useState } from "react";
import Button from "./button";
import { Link } from "react-router-dom";

const ButtonHandlerQuestion = () => {
  const [isPertanyaaAndaClicked, setIsPertanyaaAndaClicked] = useState(false);
  const [isUntukAndaClicked, setIsUntukAndaClicked] = useState(false);
  const [isDrafClicked, setIsDrafClicked] = useState(false);

  return (
    <div className="flex pt-8 gap-2 text-xs text-gray-400">
      <Button
        color={
          isPertanyaaAndaClicked
            ? "text-primary"
            : "text-gray-400 hover:text-primary"
        }
        onClick={() => setIsPertanyaaAndaClicked(!isPertanyaaAndaClicked)}
      >
        <Link to="/question">
            <p>Pertanyaan Anda</p>
        </Link>
      </Button>
      <Button
        color={
          isUntukAndaClicked
            ? "text-primary"
            : "text-gray-400 hover:text-primary"
        }
        onClick={() => setIsUntukAndaClicked(!isUntukAndaClicked)}
      >
        <Link to="/foryou">
            <p>Untuk Anda</p>
        </Link>
      </Button>
      <Button
        color={
          isDrafClicked
            ? "text-primary"
            : "text-gray-400 hover:text-primary"
        }
        onClick={() => setIsDrafClicked(!isDrafClicked)}
      >
        <Link to="/draf">
            <p>Draf</p>
        </Link>
      </Button>
    </div>
  );
};

export default ButtonHandlerQuestion;
