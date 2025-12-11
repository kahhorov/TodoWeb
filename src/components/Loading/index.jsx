import { OrbitProgress } from "react-loading-indicators";

function Loading() {
  return (
    <div className="w-full h-96 flex justify-center items-center">
      <OrbitProgress color="#7f7f7f" size="medium" text="" textColor="" />
    </div>
  );
}

export default Loading;
