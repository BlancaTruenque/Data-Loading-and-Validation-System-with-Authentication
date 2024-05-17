import * as React from "react";
import s from "./Storage.module.css";
import Papa from "papaparse";

function Storage() {
  const [file, setFile] = React.useState([]);

  const handleFileChange = (event) => {
    const newFile = event.target.files[0];

    return Papa.parse(newFile, {
      complete: (result) => {
        setFile(result.data);
      },
      header: true,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (file.length > 0) {
      const options = {
        method: "PUT",
        body: JSON.stringify({ data: file }),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("api/upload", options);
      if (response.ok) {
        const responseJson = await response.json();
        console.log(responseJson);
      } else {
        const body = await response.json();
        const error =
          body.errors instanceof Array ? body.errors.join(", ") : body.errors;
        return Promise.reject(new Error(error));
      }
    } else {
      console.log("No file selected");
    }
  }

  return (
    <>
      <div className={s.storage}>
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleFileChange} accept=".csv" />
          <button type="submit" onClick={handleSubmit}>
            Upload File
          </button>
        </form>
      </div>
    </>
  );
}

export default Storage;
