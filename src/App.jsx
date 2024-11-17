import { useEffect, useState } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import feedbackData from './db/feedbackData.json';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : feedbackData;
  });
  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  });
  const updateFeedback = feedbackType => {
    feedbackType === 'reset' && setFeedback(feedbackData);

    setFeedback(prev => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div className="container">
      <Description></Description>
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedbackData={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
}

export default App;
