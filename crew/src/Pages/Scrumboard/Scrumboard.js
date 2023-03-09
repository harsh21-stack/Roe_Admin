import React from "react";
import { GrRefresh } from "react-icons/gr";
import { SlOptionsVertical } from "react-icons/sl";
import { Card, Divider } from "antd";
import "./Scrumboard.css";
import BoardPage from "./BoardPage";
// import { useNavigate } from "react-router-dom";
const Scrumboard = () => {
  return (
    <>
      <div className="breadCumb">
        <div className="chat-span">TODOS</div>
        <div className="bread">
          <div className="chat-span2">
            App <span>{` > `}</span> Scrumboard
          </div>
          <div className="chat-icon">
            <GrRefresh className="refresh" />
            <SlOptionsVertical className="refresh" />
          </div>
        </div>
      </div>
      <div className="container fluid py-3">
        <div className="row g-4">
          <div className="col-md-3">
            <Card style={{ backgroundColor: "gray" }}>
              <p className="card-board">Project 1</p>
            </Card>
          </div>
          <div className="col-md-3 ">
            <Card style={{ backgroundColor: "gray" }}>Project 2 </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ backgroundColor: "gray" }}>Project 3 </Card>
          </div>
          <div className="col-md-3">
            <Card style={{ backgroundColor: "gray" }}> Project 4</Card>
          </div>
          <BoardPage />
        </div>
      </div>
    </>
  );
};

export default Scrumboard;
