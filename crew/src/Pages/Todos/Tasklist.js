import React, { useState, useMemo, useEffect, useCallback } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsBookmark } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { Card, Divider } from "antd";
import "./Todos.css";

const initialState = {
  data: "",
  id: "",
  bookMark: false,
  starMark: false,
};

const Tasklist = ({ type, items, setItems, setAddList }) => {
  const [inputData, setInputData] = useState(initialState);
  const [id, setId] = useState("");

  console.log(items, "items");
  const monthNames = [
    "January",
    "February",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let monthIndex = new Date().getMonth();
  let monthName = monthNames[monthIndex];
  const date = `${monthName} ${new Date().getDate()}th`;

  console.log(items, "items");
  const addTask = () => {
    if (inputData?.data) {
      setItems((oldItems) => {
        return [
          ...oldItems,
          {
            ...inputData,
            id: Math.floor(Math.random() * 100000000000000),
            starMark: type === "Important",
            bookMark: type === "BookMark",
            type,
            checked: false,
          },
        ];
      });
      setInputData(initialState);
    } else {
      console.log("hello");
    }
  };

  const BookMark = useCallback((id) => {
    setItems((oldItems) => {
      return oldItems.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            bookMark: !task.bookMark,
          };
        } else {
          return task;
        }
      });
    });
  }, []);

  const StarMark = (id) => {
    setItems((oldItems) => {
      return oldItems.map((task) => {
        if (id === task.id) {
          return {
            ...task,
            starMark: !task.starMark,
          };
        } else {
          return task;
        }
      });
    });
  };

  useEffect(() => {
    setAddList((oldItems) => {
      return oldItems.map((data) => {
        return {
          ...data,
          totalItem:
            data.type === type
              ? (type === "BookMark" &&
                  items.filter((data) => data.bookMark).length) ||
                (type === "Important" &&
                  items.filter((data) => data.starMark).length) ||
                items.filter((ele) => ele.type === type).length
              : data.totalItem,
        };
      });
    });
  }, [type, items, BookMark]);

  console.log(items, "items");

  const modifyData = useMemo(() => {
    if (type === "BookMark") {
      return items.filter((ele) => ele.bookMark);
    }
    if (type === "Important") {
      return items.filter((ele) => ele.starMark);
    }
    return items.filter((ele) => ele.type === type);
  }, [items, type]);

  const checkEvent = (id) => {
    setItems((oldItems) => {
      return oldItems.map((data) => {
        if (data.id === id) {
          return {
            ...data,
            checked: !data.checked,
          };
        } else {
          return data;
        }
      });
    });
  };
  return (
    <>
      <div className="todo-header">
        <h4>{type}</h4>
        <p>{date}</p>
      </div>
      <Divider />
      {modifyData.map((itemVal) => {
        return (
          <>
            {
              <>
                <div className="Todo-list">
                  <div className="input-box">
                    <input
                      type="checkbox"
                      onClick={() => checkEvent(itemVal.id)}
                      checked={itemVal.checked}
                    />
                    <label
                      style={
                        itemVal.checked
                          ? { textDecoration: "line-through" }
                          : { textDecoration: "unset" }
                      }
                    >
                      {itemVal.data}
                    </label>
                  </div>
                  <div>
                    {itemVal.bookMark ? (
                      <BsBookmarkFill onClick={() => BookMark(itemVal.id)} />
                    ) : (
                      <BsBookmark onClick={() => BookMark(itemVal.id)} />
                    )}
                    {itemVal.starMark ? (
                      <AiFillStar onClick={() => StarMark(itemVal.id)} />
                    ) : (
                      <AiOutlineStar onClick={() => StarMark(itemVal.id)} />
                    )}
                  </div>
                </div>
                <Divider />
              </>
            }
          </>
        );
      })}
      <div className="input-box">
        <div className="inputAdd">
          <AiOutlinePlus onClick={addTask} />
          <input
            type="text"
            placeholder="new Task"
            value={inputData.data}
            onChange={(e) =>
              setInputData({
                ...inputData,
                data: e.target.value,
              })
            }
            className="input"
          />
        </div>
        <p onClick={addTask}>Add</p>
      </div>
      <Divider />
    </>
  );
};

export default Tasklist;
