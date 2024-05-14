import * as React from "react";
import s from "./Storage.module.css";

function Storage() {







    
  return (
    <>
      <div>
        <h1 className={s.title}>Sistema de Carga de Datos</h1>
      </div>
      <div >
        <h3 className={s.subtitle}>Seleccione un archivo de carga</h3>
        <div className={s.choose}>
          <button type="submit" className={s.choosefile}>
            Choose File
          </button>
          <button type="submit"  className={s.choosefile}>
            No File Chosen
          </button>
        </div>
        <button type="submit"  className={s.up} >
          Upload File
        </button>
      </div>
    </>
  );
}

export default Storage;
