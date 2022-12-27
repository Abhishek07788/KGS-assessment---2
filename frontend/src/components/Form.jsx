import React from "react";
import { useState } from "react";
import style from "./css.module.css";

const Form = () => {
  const [fullUrl, setFullUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fullUrl);
  };

  return (
    <div>
      <h1 className={style.heading}>Generate Short URL</h1>

      {/* ------------ (Form) ---------- */}
      <form onSubmit={handleSubmit} className={style.form}>
        <label>Enter url</label>
        <br />
        <input
          onChange={(e) => setFullUrl(e.target.value)}
          required
          type="text"
          placeholder="Enter url..."
        />
        <button type="submit">ADD</button>
      </form>

      {/* ---------- (Table) ------------ */}
      <table className={style.table}>
        <thead className={style.thead}>
          <tr>
            <th>LONG URL</th>
            <th>SHORT URL</th>
          </tr>
        </thead>
        <tbody className={style.tbody}>
          <tr>
            <td>
              <a href="www.google.com">www.google.com</a>
            </td>
            <td>
              <a href="www.google.com">google</a>
            </td>
          </tr>
          <tr>
            <td>
              <a href="www.google.com">www.google.com</a>
            </td>
            <td>
              <a href="www.google.com">google</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Form;
