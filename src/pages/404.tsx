import React from "react";

const NotFound = () => {
  return (
    <div className="flex h-full  flex-col items-center justify-center space-y-6">
      <h2 className="text-xl text-slate-900 lg:text-3xl xl:text-4xl">
        Sorry, Page Not Found
      </h2>
      <p className="text-xs text-gray-400 lg:text-sm">
        Please sidebar on the left for navigation
      </p>
    </div>
  );
};

export default NotFound;
