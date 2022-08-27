import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./App.module.scss";
import Task from "./components/Task";
import addIcon from "./assets/add.png";
import AddTask from "./components/AddTask";
import NoTasks from "./components/NoTasks";
const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);
  // const tasks = ["Clean up the room", "Go to the Gym"];
  const tasksList = tasks?.map((task) => {
    return <Task  task={task.task} key={task._id} />;
  });
  useEffect(() => {
    axios.get("/api/v1/tasks").then((res) => {
      console.log(res.data.data);
      setTasks(res.data.data);
    });
  }, []);
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
