import React from "react";

const RoundButton = ({ label, onClick, children }) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RoundButton;
