import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { serverUrl } from "../Helpers/Constants";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const UpdateTask: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const res = await axios.get(`${serverUrl}/tasks/${id}`);
        const task = res.data;
        setTitle(task.title);
        setDesc(task.desc);
        setStatus(task.status);
      } catch (error) {
        console.error("Failed to fetch task details:", error);
      }
    };

    fetchTaskDetails();
  }, [id]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const updatedTask = { title, desc, status };
      await axios.put(`${serverUrl}/tasks/${id}`, updatedTask);
      navigate("/");
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* <Header startTour={startTour}/> */}
        <main className="flex-grow">
          <div id="newForm">
            <br />
            <div className="relative">
              <input
                type="text"
                disabled
                id="floating_filled"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-600 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_filled"
                className="absolute text-sm text-white dark:text-white duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Update Task
              </label>
            </div>
            <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
              <div className="mb-5">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Task Title"
                  required
                  value={title}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setTitle(e.target.value)
                  }
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="desc"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Desciption
                </label>
                <textarea
                  id="desc"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Describe your task..."
                  value={desc}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setDesc(e.target.value)
                  }
                ></textarea>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="status"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select task status
                </label>
                <select
                  id="status"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={status}
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    setStatus(e.target.value)
                  }
                >
                  <option>To-Do</option>
                  <option>In Progress</option>
                  <option>Done</option>
                </select>
              </div>
              <div id="formButtons" className="mb-5">
                <button
                  type="submit"
                  id="addButton"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Update Task
                </button>

                <button
                  type="submit"
                  id="addButton"
                  onClick={() => navigate("/")}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default UpdateTask;
