import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import "./footer.css";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer">
        <div>
          <AiOutlineCopyright />
          {year} Hexesis, All rights reserved
        </div>
        <div>
          <button className="footer-btn">Purchase ROE</button>
        </div>
      </div>
    </>
  );
}
