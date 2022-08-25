import React from 'react'
import styles from '../styles/Tasks.module.scss';
import editing from '../assets/editing.png';
import check from '../assets/check.png';
import deleteIcon from '../assets/delete.png';

const Task = () => {
  return (
    <div className={styles.taskWrapper}>
        <p>Clean the room</p>
        <div className={styles.actions}>
            <img src={check} alt="check icon" />
            <img src={editing} alt="edit icon" />
            <img src={deleteIcon} alt="delete icon" />
        </div>
    </div>
  )
}

export default Task