import "./styles/bootstrap.min.css";
import "./styles/styles.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/Main Content/MainContent";
import React, { useState } from "react";
import DynamicModal from "./components/utils/DynamicModal";
import PostCreate from "./components/Blogs/PostCreate";
import { Button } from "react-bootstrap";

function App() {
  const [show, setShow] = useState(false);
  const [menuShow, setMenuShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar onToggle={() => setMenuShow(!menuShow)} />
      <div className="main-wrapper">
        <div className={`off-menu bg-dark ${menuShow && "show"}`}>Test</div>
        <div className="off-menu-sibling">
          <div className="container-sm body-container">
            <MainContent func={handleShow} />
          </div>
        </div>
      </div>
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
