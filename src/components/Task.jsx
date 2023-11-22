import classNames from "classnames";
import "./Task.css";
import { useStore } from "../store";
import trash from "../assets/trash-2.svg";

const Task = ({ title }) => {
  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );

  const deleteTasks = useStore((store) => store.deleteTask);

  return (
    <div className="task">
      <div>{task.title}</div>
      <div className="bottomWrapper">
        <div>
          <img
            src={trash} alt="Trash Icon"
            onClick={() => deleteTasks(task.title)}
          />
        </div>
        <div className={classNames("status", task.state)}>{task.state}</div>
      </div>
    </div>
  );
};

export default Task;
