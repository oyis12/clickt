import React from "react";

const ProjectItems = ({ data }) => {
  return (
    <div className="pt-[10px]">
      <div>
        <p className="text-[25px] font-semibold">Project</p>
        <div className="text-[30px]">{data}</div>
      </div>
    </div>
  );
};

export default ProjectItems;
