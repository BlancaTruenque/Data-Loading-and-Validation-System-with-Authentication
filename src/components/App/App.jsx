import * as React from "react";
import s from "./App.module.css";
import { AuthProvider, useAuth } from "../../contexts/authContext";
import Start from "../Start/Start";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Admin from "../Admin/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Start />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

function App() {
  return (
    <AuthProvider>
      <div className={s.wrapper}>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  );
}

export default App;
