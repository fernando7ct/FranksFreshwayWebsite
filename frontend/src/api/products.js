import axios from 'axios';

// Change to match your Flask server (4000 or 5000, as needed)
const API_URL = 'http://127.0.0.1:4000/api/products/';

export async function getProducts() {
  const response = await axios.get(API_URL);
  return response.data;
}
