import axios from "axios";
import { API_URL } from "../constants/todo_constants";

export const Axios = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
      }
  });