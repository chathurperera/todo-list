import React, { useState } from "react";
import axios from "axios";

import styles from "../styles/AddTask.module.scss";

const AddTask = ({ setShowAddTask, setTasks }) => {
  const [taskPayload, setTaskPayload] = useState({
    task: "",
    done: false,
  });
  const [showValidations, setShowValidations] = useState(false);
  const submitTask = () => {
    if (taskPayload.task === "") {
      setShowValidations(true);
      return;
    }
    console.log(taskPayload);
    axios
      .post("/api/v1/tasks", taskPayload)
      .then((res) => {
        setShowAddTask(false);
        console.log(res);
        axios
          .get("/api/v1/tasks")
          .then((res) => {
            setTasks(res.data.data);
          })
          .catch((error) => {
            console.log(error);
          });
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
      {showValidations && (
        <small className={styles.validationError}>Please enter a task</small>
      )}
      <div className={styles.buttonWrap}>
        <button onClick={() => setShowAddTask(false)}>Close</button>
        <button onClick={submitTask}>Add Task</button>
      </div>
    </div>
  );
};

export default AddTask;
