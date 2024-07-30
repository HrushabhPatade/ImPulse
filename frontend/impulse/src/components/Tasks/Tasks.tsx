import React, { useState, useEffect } from "react";
import SplashScreen from "../Splash/Splash";
import TaskTable from "../TaskTable/TaskTable";
import NewTask from "../Form/NewTask";
import { useLocation } from "react-router-dom";


const Tasks: React.FC = () => {
  const [loading, setLoading] = useState(!sessionStorage.getItem('splashShown'));
  const [showForm, setShowForm] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem('splashShown', 'true');
      }, 10000); 

    return () => clearTimeout(timer);
    }
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
          {location.pathname === "/" &&
            (showForm ? (
              <NewTask toggleForm={toggleForm} />
            ) : (
              <TaskTable toggleForm={toggleForm} />
            ))}
        </>
      )}
    </div>
  );
};

export default Tasks;
