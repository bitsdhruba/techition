import { IoArrowBackCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-3 my-3 sm:hidden">
      <button
        className="w-16 h-8 rounded-full shadow-md shadow-slate-400 border-2 border-[#69acd6] py-1 px-2 flex items-center justify-center"
        onClick={() => navigate(-1)}
      >
        <IoArrowBackCircle fill="#E63946" fontSize={25} />
      </button>
    </div>
  );
};

export default Navigation;
