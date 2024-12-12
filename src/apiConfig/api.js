/*
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
    baseURL: `${baseUrl}`
});

export default instance;
*/

import axios from "axios";

console.log("REACT_APP_BASE_URL", process.env.REACT_APP_BASE_URL)

const baseUrl = process.env.REACT_APP_BASE_URL;

const instance = axios.create({baseURL: ${baseUrl}});

export default instance;
