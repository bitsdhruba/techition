import React, { useContext, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Loader from "../components/loader/Loader";
import SingleCourse from "../components/courses/SingleCourse";

const CourseDetail = () => {
  const { courses, load } = useContext(AppContext);

  const location = useLocation();
  const courseId = location.pathname
    .split("/")
    .filter((x) => x)
    .at(-1);

  const coursearray = [];

  const singleCourse = useMemo(() => {
    courses?.forEach((category) => {
      category.forEach((course) => {
        coursearray.push(course);
      });
    });
    return coursearray;
  }, [courses]);

  const filteredCourse = singleCourse
    .filter((course) => course.id === courseId)
    .at(-1);

  console.log(filteredCourse);

  return (
    <div>
      {load ? <Loader /> : <SingleCourse filteredCourse={filteredCourse} />}
    </div>
  );
};

export default CourseDetail;
