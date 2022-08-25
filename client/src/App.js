import React from "react";
import styles from "./App.module.scss";
import Task from "./components/Task";
import addIcon from "./assets/add.png";
import AddTask from "./components/AddTask";
const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <Task />
        <AddTask />
        <div className={styles.addButton}>
          <button>
            <img src={addIcon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
