import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import Loader from "../components/loader/Loader";
import Course from "../components/courses/Course";

const Home = () => {
  const { load, courses, fetchCourses } = useContext(AppContext);

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <div className="max-w-[1200px] mx-auto p-4 h-fit">
        <div className="my-8 min-h-[74vh]">
          <h1 className="text-3xl text-[#1D3557] font-medium text-center py-4 my-4 border-b-2 border-slate-400 shadow-lg">
            Welcome to Techition
          </h1>

          {load ? (
            <Loader />
          ) : (
            <div className="flex flex-wrap gap-4 my-8 justify-center">
              {courses?.map((catagory) => {
                return catagory.map((course) => {
                  return <Course course={course} key={course.id} />;
                });
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
