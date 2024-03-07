import axios from "axios";

const baseURL = `https://data-neuron-backend.onrender.com`;

const postData = (payload) => {
  const { name, description } = payload;
  axios
    .post(`${baseURL}/data`, {
      name,
      description,
    })
    .then((res) => {
      console.log(res);
      alert("hurray ! data added successfully");
    })
    .catch((err) => {
      console.log(`error while posting the data ${err}`);
    });
};

const getAPICount = () => {
  axios
    .get(`${baseURL}/count`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateData = (payload) => {
  const { name, description, id } = payload;
  axios
    .put(`${baseURL}/data/${id}`, {
      name,
      description,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

export { postData, getAPICount, updateData };
