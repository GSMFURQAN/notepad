import "./App.css";
import React, { useState } from "react";

import About from "./components/About";
import Alert from "./components/Alert";
import Textform from "./components/Textform";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import bgimg from 'bgimg.jpg';
import Navbar from "./components/Navbar";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundImage = "url('bgimg.jpg')";
      document.body.style.textDecorationColor = "white";

      // showAlert("Dark mode enabled","success");
    } else {
      setMode("light");
      document.body.style.backgroundImage = "url('bgslit.png')";
      // showAlert("light mode enabled","success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Text-Pad"
          home="HOME"
          aboutUs="ABOUTUS"
          contactUs="CONTACTUS"
          toggleMode={toggleMode}
          mode={mode}
        />
        <Alert alert={alert}></Alert>
        <div className="container">
          <Routes>
            <Route exact path="/About" element={<About />}></Route>
            <Route
              exact
              path="/"
              element={
                <Textform
                  showAlert={showAlert}
                  heading="Enter text"
                  mode={mode}
                                  />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
export default App;
