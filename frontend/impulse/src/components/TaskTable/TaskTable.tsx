import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { ToggleFormProps } from "../Interface/types";
import { Link } from "react-router-dom";
import { TaskData } from "../Interface/types";
import axios from "axios";
import { serverUrl } from "../Helpers/Constants";

const TaskTable: React.FC<ToggleFormProps> = ({ toggleForm }) => {
  const [tasks, setTasks] = React.useState<TaskData[]>([]);

  const fetchTaskTableData = async () => {
    try {
      const url = `${serverUrl}/tasks`;
      console.log("Requesting URL:", url);
      const res = await axios(url);
      console.log("Res : ", res);
      setTasks(res.data);
    } catch (error) {
      console.error("Failed to fetch tasks:", error);
    }
  };

  const deleteUrl = async (_id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (confirmDelete) {
      try {
        const response = await axios.delete(`${serverUrl}/tasks/${_id}`);
        console.log(response);
        fetchTaskTableData(); //Refresh
      } catch (error) {
        console.error("Failed to delete task:", error);
      }
    }
  };

  React.useEffect(() => {
    fetchTaskTableData();
  }, []);

  return (
    <div id="maincontent">
      
      <div className="flex justify-between items-center">

        <h2 className="text-2xl font-bold mb-4 text-white">Tasks</h2>
        <button
          type="button"
          onClick={toggleForm}
          className="add-task-button py-2.5 px-5 mb-2 text-sm font-medium text-black focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-white dark:bg-white dark:text-black dark:border-white dark:hover:text-black dark:hover:bg-[#f4f4f5]"
        >
          Add Task
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="task-table w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-600 dark:text-gray-400">
            <tr>
              <th scope="col" className=" px-6 py-3 w-3/12">
                Title
              </th>
              <th scope="col" className="px-6 py-3 w-6/12">
                Description
              </th>
              <th scope="col" className="updated-at px-6 py-3">
                Updated At
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="h-24 overflow-y">
            {tasks.map((task) => (
              <tr key={task._id} className="bg-white dark:bg-[#18181B] ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {task.title}
                </th>
                <td className="px-6 py-4">{task.desc}</td>
                <td className="px-6 py-4">
                  {task.createdAt !== task.updatedAt ? (
                    new Date(task.updatedAt).toLocaleString()
                  ) : (
                    "Not updated"
                  )}
                </td>
                <td className="px-6 py-4">
                  <div
                    className={`inline-block rounded-full px-4 py-2 text-xs font-semibold ${
                      task.status === "In Progress"
                        ? "bg-yellow-100 text-yellow-800"
                        : task.status === "To-Do"
                        ? "bg-red-100 text-red-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    <p>{task.status}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-3">
                    <Link to={`/update/${task._id}`} className="edit-icon">
                      <FaRegEdit size={20} />
                    </Link>
                    <MdOutlineDelete
                      size={22}
                      onClick={() => deleteUrl(task._id)}
                      className="delete-icon"
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskTable;
