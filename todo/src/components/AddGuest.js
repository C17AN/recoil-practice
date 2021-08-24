import React, { useState } from "react";
import { guestListState, updatedGuestListState } from "../store/guestState";
import { useRecoilValue, useRecoilState } from "recoil";
import GuestList from "./GuestList";

const AddGuest = () => {
  const [guestId, setGuestId] = useState(null);
  const [guestList, setGuestList] = useRecoilState(guestListState);

  const handleInput = (e) => {
    setGuestId(e.target.value);
  };

  const addGuest = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${guestId}`);
    const data = await res.json();
    setGuestList([...guestList, data]);
  };

  return (
    <div>
      <label htmlFor="search">추가할 고객 ID를 입력하세요.</label>
      <input type="text" id="search" onChange={handleInput} />
      <button onClick={addGuest}>추가</button>
      <GuestList />
    </div>
  );
};

export default AddGuest;
