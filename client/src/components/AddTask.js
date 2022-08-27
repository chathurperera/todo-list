import React, { useState } from "react";
import axios from "axios";

import styles from "../styles/AddTask.module.scss";

const AddTask = ({ setShowAddTask }) => {
  const [taskPayload, setTaskPayload] = useState({
    task: "",
    done: false,
  });
  const [showValidations, setShowValidations] = useState(false);
  const submitTask = () => {
    if (taskPayload.task === "") {
      showValidations(true);
      return;
    }
    console.log(taskPayload);
    axios
      .post("/api/v1/tasks", taskPayload)
      .then((res) => {
        setShowAddTask(false);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.addTask}>
      <p>Add Task</p>
      <input
        type="text"
        onChange={(e) => setTaskPayload({ task: e.target.value, done: false })}
      />
      <div className={styles.buttonWrap}>
        <button onClick={() => setShowAddTask(false)}>Close</button>
        <button onClick={submitTask}>Add Task</button>
      </div>
    </div>
  );
};

export default AddTask;
