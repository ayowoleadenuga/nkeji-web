import React from "react";
import LoadingSpinner from "./loading-spinner";

const Loader = () => {
  return (
    <div className="bg-white flex items-center justify-center h-screen">
      <LoadingSpinner />
    </div>
  );
};

export default Loader;
