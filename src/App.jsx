import { useState } from "react";
import style from "./App.module.css";
import AppName from "./components/AppName";
import Button from "./components/Button";
import Display from "./components/Display";
function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={style.container}>
      <AppName></AppName>
      <div className={style.innerContainer}>
        <Display displayVale={calVal}></Display>
        <Button onButtonClick={onButtonClick}></Button>
      </div>
    </div>
  );
}

export default App;
