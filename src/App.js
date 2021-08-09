import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";
import CharacterCounter from "./CharacterCounter";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <CharacterCounter />
      </RecoilRoot>
    </div>
  );
}

export default App;
