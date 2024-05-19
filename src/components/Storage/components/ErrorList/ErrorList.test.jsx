// @vitest-environment jsdom
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ErrorList from "./ErrorList";

describe("Pruebas de ErrorList", () => {
  it("Llamado del titulo", () => {
    render(<ErrorList errorList={[]} />);
    const title = screen.getByText(
      "The (0) records listed below encountered errors. Please rectify these issues and retry"
    );
    expect(title).toBeInTheDocument();
  });
  it("Se debe mostrar un ErrorRow cuando hay data en el ErrorList", () => {
    render(
      <ErrorList
        errorList={[
          {
            row: 1,
            details: {
              name: "El campo 'name' no puede estar vacío.",
              email: null,
              age: null,
            },
          },
        ]}
        data={[
          {
            name: "test",
            email: "test",
            age: 1,
          },
        ]}
      />
    );
    const buttonText = screen.getByText("Retry");
    expect(buttonText).toBeInTheDocument();
  });
});
