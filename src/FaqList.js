import { Faq } from "./component/Faq";

export const FaqList = ({ questionsList }) => {
  return (
    <div>
      {questionsList.map((item, index) => {
        return <Faq item={item} key={index} index={index} />;
      })}
    </div>
  );
};
