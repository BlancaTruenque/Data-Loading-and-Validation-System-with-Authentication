import * as React from "react";
import s from "./Start.module.css";
function Start
() {
  const [status, setStatus] = React.useState("idle");
  const [activeTab, setActiveTab] = React.useState("login");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const addEmail = (e) => {
    setEmail(e.target.value);
  };
  const addPassword = (e) => {
    setPassword(e.target.value);
  };
  function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");

    if (activeTab === "login") {
      login(email, password)
        .then(() => setStatus("success"))
        .catch(() => setStatus("error"));
    } else {
      signup(email, password)
        .then(() => setStatus("success"))
        .catch((error) => {
          setStatus("error");
          setSignUpErrors(error.message);
        });
    }
  }
  function handleTabChange(tab) {
    setActiveTab(tab);
    setStatus("idle");
  }
  const isLoading = status === "loading";
  const buttonText = activeTab === "login" ? "Enter" : "Create";
  const hasError = status === "error";
  return (
    <>
    <div className={s.start}>
    <div>
      <h1>
        Sistema de Carga de Datos
      </h1>
    </div>  
    <br />
    <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.data}>
          <label htmlFor="email">Email</label>
          <input  
           onChange={addEmail}
            id="email"
            type="email"
            name="email"
            placeholder=""
            required
          />
        </div>
  
        <div  className={s.data}>
          <label htmlFor="password">Password</label>
          <input
          onChange={addPassword}
            type="password"
            id="password"
            name="password"
            required
            minLength={6}
          />
        </div>
 <button type="submit"
          onClick={() => handleTabChange("login")}
        >
          Login
        </button>


      </form>
     
      </div>
      </>
  );
}

export default Start;
