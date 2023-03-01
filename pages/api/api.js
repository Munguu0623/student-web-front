import axios from "axios";

export default async (req, res) => {
  const response = await axios.get("http://localhost:1337/");
  const posts = response.data;
  res.status(200).json(posts);
};
