import axios from "axios";

// ------------- (get all url) ---------
export const getAllUrl = () => {
  return axios.get("https://kgs-45o2.onrender.com/");
};

// ------------- (post new url) ------------
export const postNewUrl = (cred) => {
  return axios.post("https://kgs-45o2.onrender.com/", { fullUrl: cred });
};

// ------------- (delete url) ------------
export const deleteUrl = (id) => {
  return axios.delete(`https://kgs-45o2.onrender.com/${id}`);
};
