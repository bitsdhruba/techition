import Template from "../Template/Template";
import signupImage from "../assets/user.png";

const Signup = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Template
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build skills for today, tomorrow and beyond"
        desc2="Education to future proof your career"
        formType="signup"
        image={signupImage}
      />
    </div>
  );
};

export default Signup;
