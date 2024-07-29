import React from "react";
import Header from "../Header/Header";
import Tasks from "../Tasks/Tasks";
import Footer from "../Footer/Footer";

const Container = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Tasks />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Container;
