import React, { useEffect, useState } from "react";
// import Lec10 from "./Lec10/Lec10";
// import Lec11 from "./Lec11/Lec11";
// import Lec12 from "./Lec12/Lec12";
import Lec13 from "./Lec13/Lec13";
import ThemeContext from "./Lec13/themeContext";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <Lec13 />
    </>
  );
}

export default App;
