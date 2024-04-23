import { useSelector } from "react-redux";
import Course from "../components/courses/Course";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Dashboard = () => {
  const Like = useSelector((state) => state.Like);

  return (
    <div className="max-w-[1200px] min-h-[72vh] mx-auto">
      <Navigation />
      <h1 className="text-2xl text-[#1D3557] my-6 mx-6">My Dashboard</h1>
      <div className="flex flex-wrap gap-4 my-8 justify-center">
        {Like.length > 0 ? (
          Like.map((course) => {
            return <Course course={course} key={course.id} />;
          })
        ) : (
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl text-center m-4 ">No Liked courses yet</h1>
            <button className="p-3 m-2 bg-[#E63946] text-white text-xl rounded-lg shadow-lg hover:bg-[#ff5866]">
              <Link to="/">Explore Now</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
