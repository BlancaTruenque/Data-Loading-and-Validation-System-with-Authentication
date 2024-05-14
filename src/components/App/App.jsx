import * as React from "react";
import Start from "../Start/Start";
import Storage from "../Storage/Storage";
import s from "./App.module.css";


function App() {
  const [page, setPage] = React.useState("/");

  function startPage() {
    setPage("/start");
  }

  return (
    <>
    <div className={s.wrapper}>
  <Start/>
   </div> 
   <br />
   <div  className={s.wrapper}>
  <Storage/>
  </div>
 </>
  );
}

export default App;
