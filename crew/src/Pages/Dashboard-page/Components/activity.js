import React from "react";
import data from "../data";
import "../Dashboard.css";

const Activity = () => {
  return (
    <div>
      <div className="activity">
        <p>Latest Activity</p>
        <p className="view">View More</p>
      </div>
      <div>
        {data.map((person, index) => {
          return (
            <div className="activity-data">
              <div className="img-ac">
                <img src={person.image} alt="person" className="person-image" />
              </div>
              <div>
                <p>{person.job}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Activity;
