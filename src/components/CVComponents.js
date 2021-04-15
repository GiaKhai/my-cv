/** @format */

import React from "react";

function CVComponent(props) {
  return (
    <div>
      <h3>{props.item.university}</h3>
      <h3> {props.item.title}</h3>
      <h4>
        {props.item.startDate} - {props.item.endDate}
      </h4>
      <p>{props.item.description}</p>
    </div>
  );
}
export default CVComponent;
