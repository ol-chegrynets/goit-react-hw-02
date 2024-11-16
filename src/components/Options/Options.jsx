import s from './Options.module.css';

const Options = ({ updateFeedback, totalFeedback }) => {
  return (
    <div className={s.wrapper}>
      {/* {Object.keys(updateFeedback).map(option => (
        <button key={option} onClick={() => handleClickByOption(option)}>
          {option}
        </button>
      ))} */}
      <button
        onClick={() => updateFeedback('good')}
        type="button"
        className={s.good}
      >
        Good
      </button>
      <button
        onClick={() => updateFeedback('neutral')}
        type="button"
        className={s.neutral}
      >
        Neutral
      </button>
      <button
        onClick={() => updateFeedback('bad')}
        type="button"
        className={s.bad}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={() => updateFeedback('reset')} type="button">
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
