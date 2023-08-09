import axios from "axios";

export const authFetch = axios.create({
  baseURL: "https://course-api.com/",
});

authFetch.interceptors.request.use(
  (request) => {
    request.headers.common["Accept"] = "application/json";
    console.log("request sent");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
authFetch.interceptors.response.use(
  (response) => {
    console.log("request received");
    return response;
  },
  (error) => {
    console.log(error.response);
  }
);
