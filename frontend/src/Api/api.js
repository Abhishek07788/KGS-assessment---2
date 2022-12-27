import axios from "axios";

// ------------- (get all url) ---------
export const getAllUrl = () => {
  return axios.get("http://localhost:8080/url");
};

// ------------- (post url) ------------
export const postNewUrl = (cred) => {
  return axios.post("http://localhost:8080/url", { fullUrl: cred });
};

// --------- (redirectApi url) ---------
export const redirectApi = (shortUrl) => {
  return axios.get(`http://localhost:8080/url/${shortUrl}`);
};
