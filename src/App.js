import React, { useEffect, useState } from "react";

import { BrowserRouter } from "react-router-dom";

import Mainpage from "./components/Mainpage";
import { images } from "./customModules/BlogHelper";

function App() {
  const [isDark, setDarkTheme] = useState(false);
  const setToDark = () => {
    setDarkTheme(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);
  return (
    <React.Fragment>
      <BrowserRouter>
        <img src=" https://drive.google.com/uc?export=view&id=1Igm2vKhZbnXn9rMed8_4BNCGGyY0_s9V"></img>
        <Mainpage setToDark={setToDark} isDark={isDark} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
