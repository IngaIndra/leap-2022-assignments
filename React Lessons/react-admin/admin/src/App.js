import "./styles/bootstrap.min.css";
import "./styles/styles.css";
import Navbar from "./components/Navbar";
import MainContent from "./components/Main Content/MainContent";
import React, { useState } from "react";
import DynamicModal from "./components/utils/DynamicModal";
import PostCreate from "./components/Blogs/PostCreate";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Signin from "./pages/Signin";
import SignInError from "./pages/SignInError";
import Signup from "./pages/Signup";

export default function App() {
  const [signedIn, setSignedIn] = useState(true);
  const [show, setShow] = useState(false);
  const [menuShow, setMenuShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (!signedIn) {
    return (
      <>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="*" element={<SignInError />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Navbar onToggle={() => setMenuShow(!menuShow)} />
      <div className="main-wrapper">
        <div className={`off-menu bg-dark ${menuShow && "show"}`}>Test</div>
        <div className="off-menu-sibling">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/articles"
              element={<Articles menuShow={menuShow} handleShow={handleShow} />}
            />
          </Routes>
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
