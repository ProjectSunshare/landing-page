import React, { useEffect, useState } from "react";

import { BrowserRouter } from "react-router-dom";

import Mainpage from "./components/Mainpage";

function App() {
  const [isDark, setDarkTheme] = useState(false);

  const setToDark = () => {
    setDarkTheme(!isDark);
  };

  useEffect(() => {
    console.log("Dark Mode: ", isDark);
  }, [isDark]);
  return (
    <React.Fragment>
      <BrowserRouter>
        <Mainpage setToDark={setToDark} />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
