import s from './Feedback.module.css';
import {
  BsFillHandThumbsUpFill,
  BsFillHandThumbsDownFill,
  BsFillHandIndexThumbFill,
} from 'react-icons/bs';

const Feedback = ({ feedbackData, totalFeedback, positiveFeedback }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.good}>
        <BsFillHandThumbsUpFill />
        Good: {feedbackData.good}
      </p>
      <p className={s.neutral}>
        <BsFillHandIndexThumbFill />
        Neutral: {feedbackData.neutral}
      </p>
      <p className={s.bad}>
        <BsFillHandThumbsDownFill />
        Bad: {feedbackData.bad}
      </p>
      <p className={s.total}>Total: {totalFeedback}</p>
      <p className={s.positiv}>Positiv: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
