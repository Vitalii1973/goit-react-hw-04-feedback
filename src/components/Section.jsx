import React from 'react';
import styles from '../styles/Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={styles.sectionContainer}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
