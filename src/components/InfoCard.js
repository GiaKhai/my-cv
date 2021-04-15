/** @format */

import React from "react";
import { BulbOutlined, PhoneOutlined, MailOutlined } from "@ant-design/icons";


function InfoCard(props) {
  return (
    <div>
      <figure>
        <img src={props.info.imgSrc} alt="" />
      </figure>
      <h2>{props.info.name}</h2>
      <p>
        <BulbOutlined /> {props.info.profession}
      </p>
      <p>
        <PhoneOutlined /> {props.info.phone}
      </p>
      <p>
        <MailOutlined /> {props.info.email}
      </p>
      <hr />
      <p>{props.info.about}</p>
    </div>
  );
}

export default InfoCard;
