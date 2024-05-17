import * as React from "react";



const authContext = React.createContext({
  isAuthenticated: false,
  login: () => {},
});

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);

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
      setIsAuthenticated(true);
    } else {
      const body = await response.json();
      const error =
        body.errors instanceof Array ? body.errors.join(", ") : body.errors;
      return Promise.reject(new Error(error));
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
