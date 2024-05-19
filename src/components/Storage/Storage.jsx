import * as React from "react";
import s from "./Storage.module.css";
import Papa from "papaparse";
import ErrorList from "./components/ErrorList/ErrorList";

function Storage() {
  const [data, setData] = React.useState([]);
  const [hasErrors, setHasErrors] = React.useState(false);
  const [errors, setErrors] = React.useState([]);
  const [success, setSuccess] = React.useState([]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    return Papa.parse(file, {
      complete: (result) => {
        setData(result.data);
      },
      header: true,
    });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (data.length > 0) {
      const options = {
        method: "PUT",
        body: JSON.stringify({ data: data }),
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await fetch("api/upload", options);
      if (response.ok) {
        const responseJson = await response.json();
        console.log(responseJson);
        if (responseJson.data.errors.length > 0) {
          setHasErrors(true);
          setErrors([...responseJson.data.errors]);
        }
        if (responseJson.data.success.length > 0) {
          setSuccess([...responseJson.data.success]);
          setTimeout(() => {
            setSuccess([]);
          }, 2000);
        }
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

  async function handleRetry(row, data) {
    const options = {
      method: "POST",
      body: JSON.stringify({ data: data }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch("api/upload", options);
    if (response.ok) {
      const responseJson = await response.json();
      if (responseJson.data.success.length > 0) {
        setSuccess([...responseJson.data.success]);
        setTimeout(() => {
          setSuccess([]);
        }, 2000);

        const newErrors = [...errors].filter((element) => element.row !== row);

        setErrors(newErrors);
        if (newErrors.length == 0) {
          setHasErrors(false);
        }
      }
    } else {
      const body = await response.json();
      const error =
        body.errors instanceof Array ? body.errors.join(", ") : body.errors;
      return Promise.reject(new Error(error));
    }
  }

  function handleNewFile() {
    setData([]), setHasErrors(false), setErrors([]), setSuccess([]);
  }
  return (
    <>
      {success.length > 0 ? (
        <h1>{success.length} records uploades successfully</h1>
      ) : (
        ""
      )}
      {!hasErrors ? (
        <div className={s.storage}>
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} accept=".csv" />
            <button type="submit" onClick={handleSubmit}>
              Upload File
            </button>
          </form>
        </div>
      ) : (
        <div className={s.container}>
          <button onClick={handleNewFile}>New File</button>
          <ErrorList errorList={errors} data={data} handleRetry={handleRetry} />
        </div>
      )}
    </>
  );
}

export default Storage;
