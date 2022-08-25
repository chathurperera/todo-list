import React from "react";
import styles from "../styles/AddTask.module.scss";
const AddTask = ({ setShowAddTask }) => {
  return (
    <div className={styles.addTask}>
      <p>Add Task</p>
      <input type="text" />
      <div className={styles.buttonWrap}>
        <button onClick={() => setShowAddTask(false)}>Close</button>
        <button>Add Task</button>
      </div>
    </div>
  );
};

export default AddTask;
