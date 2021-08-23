import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { textCountState, textState } from "./store/textStore";

const TextInput = () => {
  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(textCountState);

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onInputChange} />
      <br />
      <p>입력한 텍스트 : {text}</p>
      <p>입력한 텍스트의 길이 : {count}</p>
    </div>
  );
};

const CharacterCounter = () => {
  return (
    <div>
      <TextInput />
      {/* <CharacterCount /> */}
    </div>
  );
};

export default CharacterCounter;
