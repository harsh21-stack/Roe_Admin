import React from "react";
import { GrRefresh } from "react-icons/gr";
import { SlOptionsVertical } from "react-icons/sl";

const Breadcumb = () => {
  return (
    <div className="breadCumb">
      <div className="chat-span">TODOS</div>
      <div className="bread">
        <div className="chat-span2">
          App <span>{` > `}</span> Todos
        </div>
        <div className="chat-icon">
          <GrRefresh className="refresh" />
          <SlOptionsVertical className="refresh" />
        </div>
      </div>
    </div>
  );
};

export default Breadcumb;
