// Feedback.jsx
import React from 'react';
import styles from '../styles/Feedback.module.css';

const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.feedbackContainer}>
      <div className={styles.buttonContainer}>
        {options.map(option => (
          <button
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
            className={
              option === 'neutral'
                ? `${styles.feedbackButton} neutral`
                : styles.feedbackButton
            }
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
