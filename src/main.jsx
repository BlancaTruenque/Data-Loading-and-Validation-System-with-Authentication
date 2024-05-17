import * as React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App"
import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    this.post("/login", () => {
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
    });

    this.put("/upload", () => {
      return {
        ok: true,
        data: {
          success: [
            {
              id: 1,
              name: "Juan Perez",
              email: "juan.perez@example.com",
              age: 28,
            },
          ],
          errors: [
            {
              row: 4,
              details: {
                name: "El campo 'name' no puede estar vacío.",
                email: "El formato del campo 'email' es inválido.",
                age: "El campo 'age' debe ser un número positivo.",
              },
            },
          ],
        },
      };
    });
  },
});


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  