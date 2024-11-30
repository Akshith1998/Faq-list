import { useEffect, useState } from "react";

export const Faq = ({ item, index }) => {
  const [openAns, setOpenAns] = useState(false);

  useEffect(() => {
    if (index === 0) setOpenAns(true);
  }, []);

  return (
    <div className="faq" onClick={() => setOpenAns(!openAns)}>
      <div className="questionWrapper">
        <button>{">"}</button>
        <span>{item.question}</span>
      </div>
      {openAns && <div className="answer">{item.answer}</div>}
    </div>
  );
};
