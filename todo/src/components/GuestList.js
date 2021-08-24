import React from "react";
import GuestInfo from "./GuestInfo";
import { useRecoilState } from "recoil";
import { guestListState } from "../store/guestState";

const GuestList = () => {
  const [guestList, _] = useRecoilState(guestListState);
  console.log(guestList);

  return (
    <ul>
      {guestList.map((item) => {
        const { id, name, username, email } = item;
        return <GuestInfo id={id} name={name} username={username} key={id} email={email} />;
      })}
    </ul>
  );
};

export default GuestList;
