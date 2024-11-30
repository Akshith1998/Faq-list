import { questionsList } from "./data";
import { FaqList } from "./FaqList";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <FaqList questionsList={questionsList} />
    </div>
  );
}
