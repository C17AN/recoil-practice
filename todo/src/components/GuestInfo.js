import React from "react";

const GuestInfo = ({ id, name, username, email }) => {
  return (
    <li>
      <h2>
        {name}
        <span
          style={{
            display: "inline-block",
            marginLeft: "10px",
            color: "#666",
            fontSize: "0.9rem",
          }}
        >
          ({username})
        </span>
      </h2>
      <h4>{email}</h4>
    </li>
  );
};

export default GuestInfo;
