import "./styles/bootstrap.min.css";
import "./styles/styles.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/Main Content/MainContent";
import React, { useState } from "react";
import DynamicModal from "./components/utils/DynamicModal";
import PostCreate from "./components/Blogs/PostCreate";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar />
      <MainContent func={handleShow} />
      <DynamicModal
        show={show}
        handleClose={handleClose}
        title="Create post"
        content={<PostCreate />}
      />
    </>
  );
}

export default App;
