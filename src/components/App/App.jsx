import * as React from "react";
import s from "./App.module.css";
import { AuthProvider } from "../../contexts/authContext";
import Home from "../Home/Home";

function App() {
  return (
    <AuthProvider>
      <div className={s.wrapper}>
        <Home />
      </div>
    </AuthProvider>
  );
}

export default App;
