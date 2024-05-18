import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App"
import { Response, createServer } from "miragejs";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

createServer({
  routes() {
    this.namespace = "api";

    this.post("/login", (schema, fakeRequest) => {
      const body = JSON.parse(fakeRequest.requestBody);

      if (body.email == "admin@mail.com" && body.password == "supersecret") {
        return {
          ok: true,
          data: {
            email: "admin@mail.com",
            name: "Mr. Admin",
            role: "admin",
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
          },
        };
      } else {
        return new Response(400, {}, { error: "invalid credentials" });
      }
    });

    this.put("/upload", () => {
      return {
        ok: true,
        data: {
          success: [
            {
              id: 1,
              name: "Blanca Truenque",
              email: "blanca@gmail.com",
              age: 18,
            },

            {
              id: 3,
              name: "Chira",
              email: "Chira@Chira.com",
              age: 10,
            },
          ],
          errors: [
            {
              row: 1,
              details: {
                name: "El campo 'name' no puede estar vacío.",
                email: "El formato del campo 'email' es inválido.",
                age: "El campo 'age' debe ser un número positivo.",
              },
            },
            {
              row: 3,
              details: {
                name: null,
                email: "El formato del campo 'email' es inválido.",
                age: null,
              },
            },
            {
              row: 5,
              details: {
                name: "El campo 'name' no puede estar vacío.",
                email: null,
                age: null,
              },
            },
            {
              row: 6,
              details: {
                name: null,
                email: null,
                age: "El campo 'age' debe ser un número positivo.",
              },
            },
          ],
        },
      };
    });
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
  