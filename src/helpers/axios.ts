import axios from "axios";

const server = axios.create({
  baseURL: "https://sunveilsocial.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default server;