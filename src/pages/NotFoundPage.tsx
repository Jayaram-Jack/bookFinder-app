import { useNavigate } from "react-router-dom";
import NotFoundImg from "../assets/page-not-found.png";

const NotFound = () => {
  const navigate = useNavigate();

  const navigateToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="w-full h-full m-auto text-center">
      <img
        src={`${NotFoundImg}`}
        alt="not-found-img"
        className="w-full h-2/4"
      />
      <h2 className="mt-4 font-semibold text-xl dark:text-white">
        Ooops.. looks like you got lost
      </h2>
      <button
        className="mt-4 bg-blue-400 px-4 py-2 rounded-lg shadow-md hover:transform dark:text-white"
        onClick={() => navigateToHomePage()}
      >
        Get back Home
      </button>
    </div>
  );
};

export default NotFound;
