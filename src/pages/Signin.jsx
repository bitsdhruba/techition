import Template from "../Template/Template";
import loginImage from "../assets/login_image.webp";

const Signin = () => {
  return (
    <Template
      title="Welcome back"
      desc1="Build skills for today, tomorrow and beyond"
      desc2="Education to future proof your career"
      formType="login"
      image={loginImage}
    />
  );
};

export default Signin;
