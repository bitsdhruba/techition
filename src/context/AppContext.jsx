import axios from "axios";
import { createContext, useState } from "react";
import { courseapi } from "../api/api";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [courses, setCourses] = useState();
  const [load, setLoad] = useState();
  const [loggedin, setLoggedin] = useState(false);

  const fetchCourses = async () => {
    setLoad(true);

    try {
      const { data } = await axios.get(courseapi());
      const category = Object.values(data.data);
      setCourses(category);
      setLoad(false);
    } catch (error) {
      console.log(error, "something went wrong !");
    }
  };

  const value = {
    courses,
    load,
    loggedin,
    setLoggedin,
    fetchCourses,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
