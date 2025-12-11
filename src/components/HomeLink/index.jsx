import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

function HomeLink() {
  return (
    <div className="flex">
      <Link
        to={"/"}
        className="py-2 p-4 bg-blue-500 text-white font-bold rounded-md flex items-center gap-5"
      >
        <GoArrowLeft />
        <span>Back</span>
      </Link>
    </div>
  );
}

export default HomeLink;
