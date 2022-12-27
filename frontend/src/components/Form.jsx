import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllUrl, postNewUrl, redirectApi } from "../Api/api";
import style from "../Css/css.module.css";

const Form = () => {
  const [fullUrl, setFullUrl] = useState("");
  const [data, setData] = useState([]);

  // ------------ (Post New url) ---------
  const handleSubmit = (e) => {
    e.preventDefault();
    postNewUrl(fullUrl)
      .then((res) => {
        showUrl();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // ------------- ( get ) -------------
  useEffect(() => {
    showUrl();
  }, []);

  //-------------- (get url) -----------
  const showUrl = () => {
    getAllUrl()
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

// // ------------- (click) ------------------
//   const handleClick = (value) => {
//     redirectApi(value).then((res) => {
//     }).catch((e)=>{
//       console.log(e);
//     })
//   }

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
          {data &&
            data.map((el) => (
              <tr key={el._id}>
                <td>
                  <a href={el.fullUrl}>{el.fullUrl}</a>
                </td>
                <td>
                  <a href={el.shortUrl}>
                    {el.shortUrl}</a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
