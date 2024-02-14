import Button from "./button";
import { Link } from "react-router-dom";

const ButtonHandlerQuestion = () => {
  return (
    <div className="flex pt-8 gap-2 text-xs text-gray-400">
      <Button>
        <Link to="/question">
          <p>Pertanyaan Anda</p>
        </Link>
      </Button>
      <Button>
        <Link to="/foryou">
          <p>Untuk Anda</p>
        </Link>
      </Button>
      <Button>
        <Link to="/draf">
          <p>Draf</p>
        </Link>
      </Button>
    </div>
  );
};

export default ButtonHandlerQuestion;
