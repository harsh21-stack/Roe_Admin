import React, { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import "./chat.css";
import Chatdata from "./data";
import { Divider, Card } from "antd";
import { FiSend } from "react-icons/fi";
import Breadcumb from "../Chat/Breadcumb";

const Chat = () => {
  const [data, setData] = useState("");
  const [messagelist, setMessageList] = useState([]);
  const [chatmessage, setChatMessage] = useState({
    id: "",
    text: "",
    name: "",
    image: "",
  });

  const addMessage = () => {
    const addNewMessage = messagelist.map((ele) => {
      if (ele.id === chatmessage.id) {
        return {
          ...ele,
          messages: [...ele.messages, data],
        };
      } else {
        return ele;
      }
    });
    setMessageList(addNewMessage);
    setData("");
  };

  const getMessage = (chat) => {
    setChatMessage(chat);
    setMessageList((prev) => {
      if (prev.find((ele) => ele.id === chat.id)) {
        return prev;
      } else {
        return [
          ...prev,
          {
            id: chat.id,
            messages: [],
          },
        ];
      }
    });
  };

  const handleAnswerChange = (e) => {
    if (e.key === "Enter") {
      addMessage();
    }
  };
  return (
    <>
      <Breadcumb />
      <div className="container-fluid py-3">
        <div className="row g-4">
          <div className="col-md-4">
            <Card>
              {Chatdata.map((chat) => {
                return (
                  <>
                    <div
                      className="message-box1"
                      onClick={() => getMessage(chat)}
                    >
                      <div className="message-box">
                        <img
                          src={chat.image}
                          alt="display-profile"
                          className="message-img"
                        />
                        <span>{chat.name}</span>
                      </div>
                      <span className="message-no">{chat.message}</span>
                    </div>
                    <Divider style={{ margin: "0" }} />
                  </>
                );
              })}
            </Card>
          </div>

          {chatmessage?.name && (
            <div className="col-md-8">
              <Card style={{ height: "519px" }} className="card">
                <div className="personal-chat">
                  <div style={{ display: "flex" }}>
                    <img
                      src={chatmessage.image}
                      alt="display-profile"
                      className="message-img"
                    />
                    <p>{chatmessage.name}</p>
                  </div>
                  <div>
                    <SlOptionsVertical className="refresh" />
                  </div>
                </div>
                <div
                  className="Scroll"
                  style={{
                    overflow: "auto",
                    height: "calc(100% - 80px)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  {chatmessage?.text && (
                    <p className="chat-message">{chatmessage?.text}</p>
                  )}
                  {messagelist.map((messageVal) => {
                    if (messageVal.id === chatmessage.id) {
                      return messageVal.messages.map((mess) => {
                        return (
                          <div className="chat-message">
                            <span style={{ width: "100%" }}>{mess}</span>
                            <img
                              src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
                              alt="display-profile"
                              className="message-img1"
                            />
                          </div>
                        );
                      });
                    }
                  })}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="message"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    onKeyDown={handleAnswerChange}
                  />
                  <span onClick={addMessage}>
                    <FiSend />
                  </span>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Chat;
