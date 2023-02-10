import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-full  flex-col items-center justify-center space-y-6">
      <h2 className="text-xl text-slate-900 lg:text-3xl">
        Sorry, Page Not Found
      </h2>
      <p className="text-sm text-gray-400">
        Navigating using navbar on the left.
      </p>
    </div>
  );
};

export default NotFound;
