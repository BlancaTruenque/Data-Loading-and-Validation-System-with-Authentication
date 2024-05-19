import React from "react";
import s from "./ErrorList.module.css";

function ErrorRow({ row, detail, data, handleRetry }) {
  const [name, setName] = React.useState(data.name);
  const [email, setEmail] = React.useState(data.email);
  const [age, setAge] = React.useState(data.age);

  const addName = (e) => {
    setName(e.target.value);
  };
  const addEmail = (e) => {
    setEmail(e.target.value);
  };
  const addAge = (e) => {
    setAge(e.target.value);
  };

  function retryOnClick() {
    handleRetry(row, {
      name: name,
      email: email,
      age: age,
    });
  }

  return (
    <tr>
      <td>{row}</td>
      <td className={detail.name !== null ? s.error : ""}>
        <input type="text" value={name} onChange={addName}></input>
        {detail.name !== null ? <span>{detail.name}</span> : ""}
      </td>
      <td className={detail.email !== null ? s.error : ""}>
        <input type="text" value={email} onChange={addEmail}></input>
        {detail.email !== null ? <span>{detail.email}</span> : ""}
      </td>
      <td className={detail.age !== null ? s.error : ""}>
        <input type="text" value={age} onChange={addAge}></input>
        {detail.age !== null ? <span>{detail.age}</span> : ""}
      </td>
      <td>
        <button onClick={retryOnClick}>Retry</button>
      </td>
    </tr>
  );
}

export default function ErrorList({ errorList, data, handleRetry }) {
  function getDataByRow(data, row) {
    return data[row - 1];
  }

  return (
    <>
      <h2>
        The ({errorList.length}) records listed below encountered errors. Please
        rectify these issues and retry
      </h2>
      <div className={s.body}>
        <table>
          <thead>
            <tr>
              <th>Row</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {errorList.map((element) => {
              return (
                <ErrorRow
                  key={element.row}
                  row={element.row}
                  detail={element.details}
                  data={getDataByRow(data, element.row)}
                  handleRetry={handleRetry}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
