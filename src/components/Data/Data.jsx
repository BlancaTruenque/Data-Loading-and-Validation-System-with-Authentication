import React from "react";

const Data = () => {
  const [corrections, setCorrections] = useState(errors);

  const handleInputChange = (index, field, value) => {
    const newCorrections = [...corrections];
    newCorrections[index] = { ...newCorrections[index], [field]: value };
    setCorrections(newCorrections);
  };

  const handleSubmit = (index) => {
    onRetry(index, corrections[index]);
  };

  return (
    <div>
      <h1>Sistema de Carga de Datos</h1>
      <div>
        19 records uploaded successfully
        <button>New File</button>
      </div>
      <div>
        <p>
          The following records encountered errors. Please rectify these issues
          and retry.
        </p>
        {corrections.map((error, index) => (
          <div key={index}>
            <div>{error.row}</div>
            <input
              type="text"
              value={error.name}
              onChange={(e) => handleInputChange(index, "name", e.target.value)}
            />
            <input
              type="text"
              value={error.email}
              onChange={(e) =>
                handleInputChange(index, "email", e.target.value)
              }
            />
            <input
              type="number"
              value={error.age}
              onChange={(e) => handleInputChange(index, "age", e.target.value)}
            />
            <button onClick={() => handleSubmit(index)}>Retry</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
