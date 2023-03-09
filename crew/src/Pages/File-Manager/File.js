import React, { useState, useMemo } from "react";
import { Card, Divider } from "antd";
import Breadcumb from "./Components/Breadcumb";
import { AiFillFolder } from "react-icons/ai";
import "./file.css";
import Gallery from "../../Assets/gallery.png";
import "react-awesome-lightbox/build/style.css";
import Lightbox from "react-awesome-lightbox";
const File = () => {
  const [style, setStyle] = useState(false);
  const hoverEvent = () => {
    setStyle(true);
  };

  const closeEvent = () => {
    setStyle(false);
  };
  return (
    <>
      <Breadcumb />

      <div className="container-fluid py-3">
        <div className="row g-4">
          <div className="col-md-12">
            <Card>Storage {` > `} root</Card>
          </div>
        </div>
      </div>
      <div className="container-fluid py-3">
        <div className="row g-4">
          <div className="col-md-3">
            <Card>
              <AiFillFolder className="folder-icon" />
            </Card>
          </div>
          <div className="col-md-3">
            <Card>
              <AiFillFolder className="folder-icon" />
            </Card>
          </div>
          <div className="col-md-3">
            <Card>
              <AiFillFolder className="folder-icon" />
            </Card>
          </div>
          <div className="col-md-3">
            <Card>
              <AiFillFolder className="folder-icon" />
            </Card>
          </div>
          <div className="col-md-3">
            {style ? (
              <div className="img_ovl" onClick={closeEvent}>
                <img src={Gallery} alt="image" className="file-images" />
              </div>
            ) : (
              <Card>
                <img
                  src={Gallery}
                  alt="image"
                  className="file-image"
                  onClick={hoverEvent}
                />
              </Card>
            )}
          </div>
          <div className="col-md-3">
            {style ? (
              <div className="img_ovl" onClick={closeEvent}>
                <img src={Gallery} alt="image" className="file-images" />
              </div>
            ) : (
              <Card>
                <img
                  src={Gallery}
                  alt="image"
                  className="file-image"
                  onClick={hoverEvent}
                />
              </Card>
            )}
          </div>
          <div className="col-md-3">
            {style ? (
              <div className="img_ovl" onClick={closeEvent}>
                <img src={Gallery} alt="image" className="file-images" />
              </div>
            ) : (
              <Card>
                <img
                  src={Gallery}
                  alt="image"
                  className="file-image"
                  onClick={hoverEvent}
                />
              </Card>
            )}
          </div>
          <div className="col-md-3">
            {style ? (
              <div className="img_ovl" onClick={closeEvent}>
                <img src={Gallery} alt="image" className="file-images" />
              </div>
            ) : (
              <Card>
                <img
                  src={Gallery}
                  alt="image"
                  className="file-image"
                  onClick={hoverEvent}
                />
              </Card>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default File;
