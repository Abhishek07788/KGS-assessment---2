import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { deleteUrl, getAllUrl, postNewUrl } from "../Api/api";
import style from "../Css/css.module.css";
import Table from "./Table";

const Form = () => {
  const [fullUrl, setFullUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState([]);

  // ------------- ( get ) -------------
  useEffect(() => {
    showUrl();
  }, []);

  //-------------- (get all url) --------
  const showUrl = () => {
    setLoading(true);
    setSuccess(false);
    getAllUrl()
      .then((res) => {
        setData(res.data);
        // ------ (Alerts) ------
        setError(false);
        setLoading(false);
        setSuccess(false);
      })
      .catch((e) => {
        setError(true);
        setLoading(false);
        setSuccess(false);
      });
  };

  // ------------ (Post New url) ---------
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    postNewUrl(fullUrl)
      .then((res) => {
        showUrl();
        // ------ (Alerts) ------
        setError(false);
        setLoading(false);
        setSuccess(true);
        // ------ (Form reSet) -----
        e.target.reset();
        setFullUrl("");
      })
      .catch((e) => {
        // ------ (Alerts) ------
        setError(true);
        setLoading(true);
        setSuccess(false);
      });
  };

  //-------------- (delete url) -----------
  const handleDeleteUrl = (id) => {
    setLoading(true);
    setSuccess(false);
    deleteUrl(id)
      .then((res) => {
        showUrl();
        // ------ (Alerts) ------
        setError(false);
        setLoading(false);
        setSuccess(true);
      })
      .catch((e) => {
        // ------ (Alerts) ------
        setError(true);
        setLoading(false);
        setSuccess(false);
      });
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
          type="url"
          placeholder="Enter url..."
        />
        <button type="submit">Generate</button>
      </form>

      {/* ----------(Error)------ */}
      {error ? <h1 style={{ color: "red" }}>Server Error...</h1> : ""}
      {/* ----------(loading)------ */}
      {loading ? <h1 style={{ color: "teal" }}>Loading please wait...</h1> : ""}
      {/* ----------(success)------ */}
      {success ? <h1 style={{ color: "green" }}>Updating....</h1> : ""}

      {/* ---------- (Table) ------------ */}
      <div className={style.tableDiv}>
        <table className={style.table}>
          <thead className={style.thead}>
            <tr>
              <th>LONG URL</th>
              <th>SHORT URL</th>
              <th>REMOVE</th>
            </tr>
          </thead>

          {/* ----------- (sending data to table component)----------- */}
          <tbody className={style.tbody}>
            {data &&
              data.map((el) => (
                <Table key={el._id} {...el} handleDeleteUrl={handleDeleteUrl} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Form;
