import React from "react";

const NewFooter = () => {
  return (
    <div className=" bg-black">
      <div className="max-w-5xl mx-auto">
        <footer className="p-8 text-gray-600">
          <div className="text-center mt-8 pt-8 border-t">
            <p>
              &copy; {new Date().getFullYear()} Mark Jeriel Cabalbag. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NewFooter;
