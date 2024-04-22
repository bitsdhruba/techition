import "./loader.css";

const Loader = () => {
  return (
    <div className="mt-40 flex items-center justify-center">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
