import React from "react";
import Storage from "../Storage/Storage";
import Start from "../Start/Start";
import { useAuth } from "../../contexts/authContext";

function Home() {
  const { isAuthenticated } = useAuth();
  return <>{isAuthenticated ? <Storage /> : <Start />}</>;
}
export default Home;
