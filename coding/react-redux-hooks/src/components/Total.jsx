import { useDispatch, useSelector } from "react-redux";

export const Total = () => {
  const { totalTask, completedTasks } = useSelector((state) => ({
    totalTask: state.totalTask,
    completedTasks: state.completedTasks,
  }));
  return (
    <>
      <h1>Total Todos Page: You Can see All and Completed Tasks</h1>
      <p>
        <p>
          Total tasks : <b>{totalTask}</b>
        </p>
        <p>
          Completed tasks : <b>{completedTasks}</b>
        </p>
      </p>
    </>
  );
};