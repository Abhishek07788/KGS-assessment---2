import React from "react";
import style from "../Css/css.module.css";

const Table = (props) => {
  const { _id, shortUrl, fullUrl, handleDeleteUrl } = props;

  return (
    <tr>
      <td className={style.fullUrl}>
        <a href={fullUrl} target="_blank" rel="noreferrer">
          {fullUrl}
        </a>
      </td>
      <td className={style.shortUrl}>
        <a
          href={`https://kgs-45o2.onrender.com/${shortUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          kgs-45o2.onrender.com/{shortUrl}
        </a>
      </td>
      <td>
        <button className={style.button} onClick={() => handleDeleteUrl(_id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Table;
