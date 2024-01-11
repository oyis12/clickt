import React from "react";
import PropTypes from "prop-types";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const NextBtn = ({ label, onClick, className }) => {
  return (
    <div className="mt-7">
      <button
        className={`flex items-center text-2xl border-2 font-bold py-3 px-10 rounded-lg shadow-xl bg-transparent text-gray-800 ${className}`}
        onClick={onClick}
      >
        {label === "Back" ? (
          <GrFormPrevious className="mr-2" />
        ) : (
          <MdOutlineNavigateNext className="mr-2" />
        )}
        {label}
      </button>
    </div>
  );
};

NextBtn.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default NextBtn;
