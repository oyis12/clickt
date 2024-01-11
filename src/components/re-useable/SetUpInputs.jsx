import React, { useState } from "react";
import PropTypes from "prop-types";

const SetUpInputs = ({ label, onClick, select }) => {
  // const [select, setSelect] = useState(false);

  // const itemSelect = (index) => {
  //   setSelect(!select);
  // };

  return (
    <input
      type="button"
      value={label}
      className={`text-2xl cursor-pointer border-2 font-bold py-3 px-10 rounded-lg shadow-sm ${
        select === true
          ? "bg-blue-700 text-white"
          : "bg-transparent text-gray-800"
      }`}
      onClick={onClick}
    />
  );
};

SetUpInputs.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SetUpInputs;
