import React, { useState, useMemo } from "react";
import data from "../data";

import { Divider, Modal } from "antd";
import ListTable from "./ListTable";
import Header from "./Header";

const Contactlist = ({ type }) => {
  const [id, setId] = useState("");
  const [inputdata, setInputData] = useState({
    name: "",
    email: "",
    number: "",
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
  });
  const [contactlist, setContactList] = useState(data);
  const [show, setShow] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    if (id) {
      setContactList((oldContacts) => {
        return oldContacts.map((update, index) => {
          if (index + 1 === id) {
            return inputdata;
          } else {
            return update;
          }
        });
      });
    } else {
      setContactList((oldContacts) => {
        return [...oldContacts, inputdata];
      });
    }
    setInputData("");
    setId("");
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [search, setSearch] = useState("");

  const searchItems = useMemo(() => {
    if (!search) {
      return contactlist;
    } else {
      return contactlist.filter((prev, index) => {
        return prev.name.toLowerCase().includes(search.toLowerCase());
      });
    }
  }, [search, contactlist]);

  const typeViseData = useMemo(() => {
    if (type === "all") {
      return searchItems;
    } else return searchItems.filter((data) => data.category === type);
  }, [searchItems, type]);

  const getData = (e) => {
    const { value, name } = e.target;
    setInputData((oldContacts) => {
      return { ...oldContacts, [name]: value };
    });
  };

  const selectAllEvent = (e) => {
    if (e.target.value === "select") {
      setShow(contactlist.map((ele) => ele.id));
    } else {
      setShow([]);
    }
  };

  return (
    <>
      <div className="contact-header">
        <div>
          <select onClick={selectAllEvent}>
            <option value="select">Select All</option>
            <option value="unSelect"> UnSelect All</option>
          </select>
        </div>
        <Header
          setIsModalOpen={setIsModalOpen}
          show={show}
          setShow={setShow}
          contactlist={contactlist}
          setContactList={setContactList}
          setSearch={setSearch}
          search={search}
        />
      </div>
      <Divider />
      <ListTable
        typeViseData={typeViseData}
        show={show}
        setShow={setShow}
        contactlist={contactlist}
        setContactList={setContactList}
        setIsModalOpen={setIsModalOpen}
        setId={setId}
        setInputData={setInputData}
      />

      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className="contact-modal">
          <input
            type="text"
            placeholder="name"
            value={inputdata.name}
            name="name"
            onChange={getData}
            className="Modal-input"
          />
          <input
            type="email"
            placeholder="email"
            value={inputdata.email}
            name="email"
            onChange={getData}
            className="Modal-input"
          />
          <input
            type="number"
            placeholder="number"
            value={inputdata.number}
            name="number"
            onChange={getData}
            className="Modal-input"
          />
        </div>
      </Modal>
    </>
  );
};

export default Contactlist;
