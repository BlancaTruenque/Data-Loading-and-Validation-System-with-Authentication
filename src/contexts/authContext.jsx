import * as React from "react";



const authContext = React.createContext({
  isAuthenticated: false,
  login: () => {},
});

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  async function login(email, password) {
    const options = {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch("api/login", options);

    if (response.ok) {
      const responseJson = await response.json();
      console.log(responseJson);
      // TODO
      localStorage.setItem("token", responseJson.data.token);
      setIsAuthenticated(true);
      return true;
    } else {
      return false;
    }
  }

  return (
    <authContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        login,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export function useAuth() {
  return React.useContext(authContext);
}
