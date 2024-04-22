import { Link, useNavigate } from "react-router-dom";
import { PiEye, PiEyeClosedDuotone } from "react-icons/pi";
import { AppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { useContext, useState } from "react";

const SigninForm = () => {
  const { setLoggedin } = useContext(AppContext);

  const [formData, setFormData] = useState({ email: "", password: "" });

  function onChangeHandler(event) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  function onSubmitHandler(event) {
    event.preventDefault();
    setLoggedin(true);
    navigate("/dashboard");
    toast.success("Logged In");
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full gap-y-4 mt-6"
    >
      <label className="w-full">
        <p className="text-[0.875rem] text-richblack-110 mb-1 leading-[1.375rem] text-start">
          Enter your Email<sup className="text-pink-200 ">*</sup>
        </p>
        <input
          required
          type="email"
          placeholder="example@gmail.com"
          value={FormData.email}
          name="email"
          onChange={onChangeHandler}
          className="bg-[#F1FAEE] border-2 border-[#5781bd] rounded-[0.75rem] w-full p-[12px] text-richblack-110 placeholder-slate-500 focus:outline-none focus:border-[#1D3557]"
        />
      </label>
      <label className="w-full relative">
        <p className="text-[0.875rem] text-richblack-110 mb-1 leading-[1.375rem] text-start">
          Enter your Password
          <sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          name="password"
          value={formData.password}
          placeholder="Enter your Password"
          onChange={onChangeHandler}
          className="bg-[#F1FAEE] border-2 border-[#5781bd] rounded-[0.75rem] w-full p-[12px] text-richblack-110 placeholder-slate-500 focus:outline-none focus:border-[#1D3557]"
        />

        <span
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-[38px] cursor-pointer "
        >
          {showPassword ? (
            <PiEye fontSize={24} fill="black" />
          ) : (
            <PiEyeClosedDuotone fontSize={24} fill="black" />
          )}
        </span>
      </label>
      <Link to="#">
        <p className="text-xs mt-1 text-[#A8DADC] max-w-max ml-auto">
          Forgot Password
        </p>
      </Link>

      <button className="bg-[#E63946] text-white py-[8px] px-[12px] rounded-[8px] mt-4 font-medium text-richblack-900">
        Log in
      </button>
    </form>
  );
};

export default SigninForm;
