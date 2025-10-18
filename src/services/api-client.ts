import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "619d4971be9e4b6bb582918df416f5da",
  },
});
