import ClipLoader from "react-spinners/ScaleLoader";
import "./Loader.css";
function Loader() {
  return (
    <div className="loader-class">
      <ClipLoader color={"#7C7E7C"} size={50} />
    </div>
  );
}
export default Loader;
