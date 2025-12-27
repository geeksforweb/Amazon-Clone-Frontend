import axios from "axios";
const instance = axios.create({

  // local instance of firebase functions
  // baseURL: "http://127.0.0.1:5001/clone-e76be/us-central1/api",

  // deployed version of amazon server on render.com
    baseURL: "https://amazon-clone-backend-bwro.onrender.com/",
});
export { instance };