import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { liked, unliked } from "../../Redux/Slice";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Course = ({ course }) => {
  const { loggedin } = useContext(AppContext);

  const Like = useSelector((state) => state.Like);
  const dispatch = useDispatch();

  function likeHandler() {
    if (loggedin) {
      dispatch(liked(course));
      toast.success("Added to Dashboard");
    } else {
      toast.error("Sign in to Like!");
    }
  }

  function unlikeHandler() {
    if (loggedin) {
      dispatch(unliked(course.id));
      toast.error("Removed");
    } else {
      toast.error("Sign in");
    }
  }

  return (
    <div className="bg-[#457B9D]  w-[356px] rounded-md overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl hover:bg-[#69acd6] duration-300">
      <div className="relative ">
        <img src={course.image.url} alt="background" loading="lazy"></img>
        <div className="rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center">
          {" "}
          {Like.some((item) => item.id === course.id) ? (
            <button onClick={unlikeHandler}>
              <FcLike className="text-3xl" />
            </button>
          ) : (
            <button onClick={likeHandler}>
              <FcLikePlaceholder className="text-3xl" />
            </button>
          )}
        </div>
      </div>
      <div className="p-4">
        <Link to={`/course/${course.id}`}>
          <p className="text-[#16273f] text-lg font-semibold leading-6">
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
