import * as React from "react";
import s from "./Storage.module.css";

function Storage() {
  // const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (file) {
      console.log("Uploading file:", file.name);
      // Aquí iría la lógica para subir el archivo
    } else {
      console.log("No file selected");
    }
  };

  return (
    <>
      <div className={s.storage}>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} accept=".csv" />
          <button type="submit">Upload File</button>
        </form>
      </div>
    </>
  );
}

export default Storage;
