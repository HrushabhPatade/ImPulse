import React, { useState } from "react";
import Header from "../Header/Header";
import Tasks from "../Tasks/Tasks";
import Footer from "../Footer/Footer";
import Joyride, { STATUS, Step } from "react-joyride";

const Container = () => {
  const [runTour, setRunTour] = useState(false);

  const startTour = () => {
    setRunTour(true);
  };

  const steps: Step[] = [
    {
      target: "nav", 
      content: "Navbar of ImPulse!",
      placement: "bottom",
    },
    {
      target: ".task-table",
      content: "This table displays all a task and it's status.",
      placement: "top",
    },
    {
      target: ".add-task-button",
      content: "Click here to add a new task.",
      placement: "bottom",
    },
    {
      target: ".edit-icon",
      content: "Click to edit a task.",
      placement: "bottom",
    },
    {
      target: ".delete-icon",
      content: "Click to delete a task.",
      placement: "bottom",
    },
    {
      target: ".updated-at",
      content: "This is when the task was last updated.",
      placement: "top",
    },
    {
      target: ".footer",
      content: "This is the footer with contact my information.",
      placement: "top",
    },
  ];
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header startTour={startTour} />
        <main className="flex-grow">
          <Tasks />
        </main>
        <Footer />
      </div>
      <Joyride
        steps={steps}
        run={runTour}
        callback={(data) => {
          if (
            data.status === STATUS.FINISHED ||
            data.status === STATUS.SKIPPED
          ) {
            setRunTour(false); 
          }
        }}
        continuous={true}
        showSkipButton={true}
        showProgress={true}
        disableCloseOnEsc={true}
        disableOverlay={false}
        spotlightClicks={false}
        styles={{
          options: {
            zIndex: 10000,
            primaryColor: "#3490dc", 
            textColor: "#333", 
            overlayColor: "rgba(0, 0, 0, 0.5)", 
          },
          tooltip: {
            backgroundColor: "#ffffff",
            border: "1px solid #3490dc", 
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)", 
          },
        }}
      />
    </>
  );
};

export default Container;
