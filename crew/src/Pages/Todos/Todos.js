import React, { useState, useMemo } from "react";
import { Card, Divider } from "antd";
import {
  BsSun,
  BsBookmarkFill,
  AiFillStar,
  AiOutlinePlus,
  SlOptionsVertical,
  GrRefresh,
} from "../../Icons/index";

import "./Todos.css";
import Tasklist from "./Tasklist";
import Breadcumb from "./Components/Breadcumb";

const data = [
  {
    name: "My day",
    type: "My day",
    totalItem: 0,
    icon: <BsSun />,
  },
  {
    name: "Important",
    type: "Important",
    totalItem: 0,
    icon: <AiFillStar />,
  },
  {
    name: "Bookmarked",
    type: "BookMark",
    totalItem: 0,
    icon: <BsBookmarkFill />,
  },
];

const Todos = () => {
  const [type, setType] = useState("My day");
  const [items, setItems] = useState([]);

  const [list, setList] = useState("");
  const handleChange = (e) => {
    setList(e.target.value);
  };

  const [addList, setAddList] = useState(data);

  const addListEvent = () => {
    setAddList((oldList) => {
      return [
        ...oldList,
        {
          name: list,
          type: list,
          totalItem: 0,
          icon: <SlOptionsVertical />,
        },
      ];
    });
    setList("");
  };

  return (
    <>
      <Breadcumb />
      <div className="container-fluid py-3">
        <div className="row g-4">
          <div className="col-md-2">
            <Card>
              {addList.map((Value) => {
                return (
                  <>
                    <div className="tasktype">
                      <div>{Value.icon}</div>
                      <div onClick={() => setType(Value.type)}>
                        {Value.name}
                      </div>
                      <div className="task-button">{Value.totalItem}</div>
                    </div>
                    <Divider />
                  </>
                );
              })}
              <p className="list-box">
                <input
                  type="text"
                  placeholder="New List"
                  value={list}
                  onChange={handleChange}
                  className="input-list"
                />
                <label>
                  <AiOutlinePlus
                    onClick={addListEvent}
                    className="add-task-button"
                  />
                </label>
              </p>
            </Card>
          </div>
          <div className="col-md-10">
            <Card style={{ overflow: "auto", height: "527px" }}>
              <Tasklist
                className="Scroll"
                type={type}
                items={items}
                setItems={setItems}
                setAddList={setAddList}
              />
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todos;
