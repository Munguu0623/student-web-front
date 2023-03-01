import axios from "axios";

async function SlugPost(slug, data) {
  console.log("CALLING URL:   ", process.env.URL + "/" + slug);
  return new Promise((resolve, reject) => {
    console.log("URL: -> " + `${process.env.URL}/${slug}`);
    axios
      .post(`${process.env.URL}/${slug}`, data)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export default async function handler(req, res) {
  const { slug } = req.query;
  await SlugPost(slug.join("/"), req.body).then(
    function (response) {
      res.status(200).json(response.data);
    },
    function (error) {
      if (error.response.status === 400) {
        let data = {
          status: 0,
          message: error.response.data.message,
        };
        res.status(200).json(data);
      } else console.log(error);
    }
  );
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "20mb", // Set desired value here
    },
    responseLimit: "20mb",
  },
};
