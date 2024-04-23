import { useDispatch, useSelector } from "react-redux";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { liked, unliked } from "../../Redux/Slice";
import toast from "react-hot-toast";
import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";

const SingleCourse = ({ filteredCourse }) => {
  const Like = useSelector((state) => state.Like);

  const { loggedin } = useContext(AppContext);
  const dispatch = useDispatch();

  function likeHandler() {
    if (loggedin) {
      dispatch(liked(filteredCourse));
      toast.success("Added to Dashboard");
    } else {
      toast.error("Sign in to Like!");
    }
  }

  function unlikeHandler() {
    if (loggedin) {
      dispatch(unliked(filteredCourse.id));
      toast.error("Removed");
    } else {
      toast.error("Sign in");
    }
  }

  const [enrol, setEnrol] = useState(false);

  return (
    <div className="max-w-[1200px] min-h-[74vh] mx-auto md:flex md:items-center">
      <div className="md:flex md:justify-evenly p-5 md:bg-[#F1FAEE] md:rounded-lg">
        <div className="md:w-[45%]">
          <img
            src={filteredCourse?.image.url}
            alt="background"
            className="bg-cover bg-no-repeat rounded-lg aspect-square md:w-[70%]"
          />
        </div>
        <div className="md:w-[45%]  md:shadow-lg md:p-4 md:rounded-lg">
          <h1 className="text-2xl my-4 text-[#1D3557] font-medium">
            {filteredCourse?.title}
          </h1>
          <div className="flex justify-between items-center">
            <button
              className="bg-gradient-to-r from-[#db5661] to-[#d81828] my-4 rounded-lg text-white text-lg p-3 shadow-md"
              onClick={() => setEnrol(!enrol)}
            >
              {enrol ? "Enrolled" : "Enrol Now"}
            </button>
            {Like.some((item) => item.id === filteredCourse.id) ? (
              <button onClick={unlikeHandler} className="hover:size-105">
                <FcLike className="text-4xl " />
              </button>
            ) : (
              <button onClick={likeHandler} className=" hover:size-95">
                <FcLikePlaceholder className="text-4xl" />
              </button>
            )}
          </div>

          <p className="text-xl text-[#1D3557] leading-8 text-justify">
            {filteredCourse?.description}. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Totam quis, enim sint praesentium esse
            aperiam, cupiditate impedit, nobis deserunt accusantium labore.
            Quod, error ipsam. Hic vero repellat repellendus ipsam laboriosam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
