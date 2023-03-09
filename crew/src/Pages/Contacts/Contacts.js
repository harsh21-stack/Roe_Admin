import React, { useState, useMemo } from "react";
import { Card, Divider } from "antd";
import { GrRefresh } from "react-icons/gr";
import { SlOptionsVertical } from "react-icons/sl";
import data from "./data";
import "./contact.css";

import Contactlist from "../Contacts/Components/Contactlist";
import Breadcumb from "./Components/Breadcumb";

const Contacts = () => {
  const [type, setType] = useState("all");

  return (
    <>
      <Breadcumb />
      <div className="container-fluid py-3">
        <div className="row g-4">
          <div className="col-md-3">
            <Card>
              <>
                <div className="contact-header">
                  <img
                    src="https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg"
                    className="person-image"
                  />
                  <p>Alice Blue</p>
                </div>
                <Divider />
                <div>
                  <p onClick={() => setType("all")}>All Contacts</p>
                  <Divider />
                  <p onClick={() => setType("frequently")}>
                    Frequently Contacted
                  </p>
                  <Divider />
                  <p onClick={() => setType("favorite")}>Favorite Contacts</p>
                </div>
              </>
            </Card>
          </div>
          <div className="col-md-9">
            <Card
              className="Scroll"
              style={{ overflow: "auto", height: "527px" }}
            >
              <div>
                <Contactlist type={type} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
