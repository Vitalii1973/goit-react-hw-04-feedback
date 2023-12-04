// Notification.jsx
import React from 'react';
import styles from '../styles/Notification.module.css';

const Notification = ({ message }) => {
  return (
    <div className={styles.notificationContainer}>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
