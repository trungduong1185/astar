import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { questions } from '../../assets/data.json';
import './styles.css';
import { useState } from 'react';

const Question = ({ item, isActive, onClick }) => {
  const _handleOnClick = () => {
    if (onClick) onClick();
  };

  return (
    <>
      <div
        className={
          isActive
            ? 'w-90 w-100-l flex justify-between tracked pv3 ph3 ph5-l br4 ba b--black-20 pointer lh-copy b mb0 cau-hoi-active   br--top items-start'
            : 'w-90 w-100-l flex justify-between tracked pv3 ph3 ph5-l br4 ba b--black-20 pointer lh-copy b mb3 cau-hoi items-start'
        }
        onClick={_handleOnClick}
      >
        <p>{item.question}</p>
        {isActive ? (
          <img
            src="images/svg_arrow_up.svg"
            alt=""
            className="w1 w2-l ml2 ml4-l mt2"
          />
        ) : (
          <img
            src="images/svg_arrow_down.svg"
            alt=""
            className="w1 w2-l ml2 ml4-l mt2"
          />
        )}
      </div>

      <div
        className={`w-90 w-100-l pv3 ph4 ph5-l br4 b--black-10 br--bottom black-90 cau-tra-loi ba mb3  ${
          isActive ? ' cauTraLoi ' : ' cauTraLoi anCauTraLoi '
        }`}
        dangerouslySetInnerHTML={{ __html: item.answer }}
      />
    </>
  );
};

const QA = ({ id }) => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleOnToggleAnswer = (i) => {
    if (activeQuestion === i) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(i);
    }
  };

  return (
    <div id={id} className="w-100">
      <div className="w-100 w-70-l center flex flex-column items-center">
        <p className="_qa-title f2 fw6 tracked pc-red pv4">Q&A</p>

        {questions.map((item, i) => (
          <Question
            item={item}
            key={item.question}
            isActive={activeQuestion === i}
            onClick={() => {
              handleOnToggleAnswer(i);
            }}
          />
        ))}

        <div className="bg-pc-green ph4 pv3 br3 white fw6 f7 ttu pointer dim">
          + more questions
        </div>
      </div>
    </div>
  );
};
export default QA;
