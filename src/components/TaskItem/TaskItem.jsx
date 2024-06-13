import { useTheme } from '../../themeContext';
import styles from './TaskItem.module.scss';

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  const { theme } = useTheme();

  return (
    <div className={`${styles.taskItem} ${theme === 'dark' ? styles.dark : ''}`}>
      <span className={styles.taskTitle} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <div className={styles.taskActions}>
        <button onClick={() => onToggleComplete(task.id)}>
          {task.completed ? 'Incomplete' : 'Complete'}
        </button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
