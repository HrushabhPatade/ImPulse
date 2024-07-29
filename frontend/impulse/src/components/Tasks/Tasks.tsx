

import React, { useState, useEffect } from "react";
import SplashScreen from "../Splash/Splash";
import TaskTable from "../TaskTable/TaskTable";
import NewTask from "../Form/NewTask";

const Tasks: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="p-4 relative">
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          {/* <TaskTable toggleForm={toggleForm} />
          {showForm && <NewTask toggleForm={toggleForm} />} */}
           {showForm ? (
            <NewTask toggleForm={toggleForm} />
          ) : (
            <TaskTable toggleForm={toggleForm} />
          )}
        </>
      )}
    </div>
  );
};

export default Tasks;

