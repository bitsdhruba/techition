import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  return (
    <div className="bg-[#457B9D]  w-[356px] rounded-md overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl hover:bg-[#69acd6] duration-300">
      <div className="relative ">
        <img src={course.image.url} alt="background"></img>
        <div className="rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center">
          {" "}
          <button>
            <FcLikePlaceholder className="text-3xl" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <Link to={`/course/${course.id}`}>
          <p className="text-white text-lg font-semibold leading-6">
            {course.title}
          </p>
        </Link>
        <p className="mt-2 text-white">
          {course.description.length > 100
            ? `${course.description.substring(0, 100)}...`
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Course;
