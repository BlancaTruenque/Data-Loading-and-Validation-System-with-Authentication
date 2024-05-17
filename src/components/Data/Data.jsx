import React from "react";

const initialErrors = [
  {
    id: 1,
    row: 4,
    name: "Testino Dirupea",
    email: "testino",
    age: "25",
    nameError: "",
    emailError: "El formato del campo 'email' es inválido.",
    ageError: "",
  },
  {
    id: 2,
    row: 12,
    name: "",
    email: "maria@email.com",
    age: "abc",
    nameError: "El campo 'name' no puede estar vacío.",
    emailError: "",
    ageError: "El campo 'age' debe ser un número positivo.",
  },
];

const ErrorHandling = () => {
  const [errors, setErrors] = React.useState(initialErrors);

  const handleRetry = (id) => {
    alert(`Registro ${id} corregido y reenviado con éxito.`);
    setErrors(errors.filter((error) => error.id !== id));
  };

  const handleChange = (id, field, value) => {
    const newErrors = errors.map((error) =>
      error.id === id ? { ...error, [field]: value } : error
    );
    setErrors(newErrors);
  };

  const handleNewFile = () => {
    setErrors([]);
  };

  return (
    <div>
      <h1>Sistema de Carga de Datos</h1>
      <p>18 registros cargados exitosamente</p>
      <p>
        Los siguientes registros encontraron errores. Por favor rectifique estos
        problemas y vuelva a intentarlo.
      </p>
      {errors.map((error) => (
        <div key={error.id}>
          <div>Row: {error.row}</div>
          <div>
            <label>Name</label>
            <input
              type="text"
              value={error.name}
              onChange={(e) => handleChange(error.id, "name", e.target.value)}
            />
            {error.nameError && <p>{error.nameError}</p>}
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={error.email}
              onChange={(e) => handleChange(error.id, "email", e.target.value)}
            />
            {error.emailError && <p>{error.emailError}</p>}
          </div>
          <div>
            <label>Age</label>
            <input
              type="number"
              value={error.age}
              onChange={(e) => handleChange(error.id, "age", e.target.value)}
            />
            {error.ageError && <p>{error.ageError}</p>}
          </div>
          <button onClick={() => handleRetry(error.id)}>Retry</button>
        </div>
      ))}
      <button onClick={handleNewFile}>New File</button>
    </div>
  );
};

export default ErrorHandling;
