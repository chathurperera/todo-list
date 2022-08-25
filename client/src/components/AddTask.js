import React from "react";
import styles from '../styles/AddTask.module.scss';
const AddTask = () => {
  return (
    <div className={styles.addTask}>
      <p>Add Task</p>
      <input type="text" />
      <div className={styles.buttonWrap}>
        <button>Close</button>
        <button>Add Task</button>
      </div>
    </div>
  );
};

export default AddTask;
