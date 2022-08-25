import React, { useState } from "react";
import styles from "./App.module.scss";
import Task from "./components/Task";
import addIcon from "./assets/add.png";
import AddTask from "./components/AddTask";
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Task />
        {showAddTask && <AddTask />}
        <div className={styles.addButton}>
          <button onClick={() => setShowAddTask(true)}>
            <img src={addIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
