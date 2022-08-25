import React, { useState } from "react";
import styles from "./App.module.scss";
import Task from "./components/Task";
import addIcon from "./assets/add.png";
import AddTask from "./components/AddTask";
import NoTasks from "./components/NoTasks";
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  // const tasks = ["Clean up the room", "Go to the Gym"];
  const tasks = [];
  const tasksList = tasks.map((task) => {
    return <Task task={task} />;
  });
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        {tasks.length > 0 ? tasksList : <NoTasks />}
        {showAddTask && <AddTask setShowAddTask={setShowAddTask} />}
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
