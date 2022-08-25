import React from "react";
import styles from "../styles/Notasks.module.scss";

const NoTasks = () => {
  return (
    <div className={styles.noTasks}>
      <h3>NoTasks available</h3>
      <p>Click the plus icon to add tasks</p>
    </div>
  );
};

export default NoTasks;
