const express = require("express");
const axios = require("axios");
const app = express();
app.use(express.json());

const BASE_URL = "http://localhost"; // Change when deploying to Docker network

app.get("/users", async (req, res) => {
  const response = await axios.get(`${BASE_URL}:5001/users`);
  res.json(response.data);
});

app.get("/orders", async (req, res) => {
  const response = await axios.get(`${BASE_URL}:5002/orders`);
  res.json(response.data);
});

app.get("/products", async (req, res) => {
  const response = await axios.get(`${BASE_URL}:5003/products`);
  res.json(response.data);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`API Gateway running on port ${PORT}`));
