import { useState } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import feedbackData from './db/feedbackData.json';

function App() {
  const [count, setCount] = useState(
    () => JSON.parse(localStorage.getItem('count')) ?? feedbackData
  );
  const updateFeedback = feedbackType => {
    feedbackType === 'reset' && setCount(feedbackData);

    setCount(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };
  const totalFeedback = count.good + count.neutral + count.bad;
  const positiveFeedback = Math.round((count.good / totalFeedback) * 100);

  return (
    <div className="container">
      <Description></Description>
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedbackData={count}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
}

export default App;
