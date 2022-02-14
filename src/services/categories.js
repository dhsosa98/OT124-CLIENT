import axios from "axios";
import { API_BASE_URL } from "./index";


export async function deleteCategory(id) {
  return await axios
    .delete(`${API_BASE_URL}/api/v1/categories/${id}`)
    .catch((error) => error);
}

<<<<<<< HEAD
=======
export async function createCategory(category) {
  return await axios
    .post(`${API_BASE_URL}/api/v1/categories`, category)
    .catch((error) => error);
}

export async function updateCategory(category, id) {
  return await axios
    .put(`${API_BASE_URL}/api/v1/categories/${id}`, category)
    .catch((error) => error);
}

export async function getCategory(id) {
  return await axios
    .get(`${API_BASE_URL}/api/v1/categories/${id}`)
    .catch((error) => error);
}

>>>>>>> 7037ad47f323656ec4db039422c9a02fa25d84b9
export async function getAllCategories() {
  return await axios
    .get(`${API_BASE_URL}/api/v1/categories`)
    .catch((error) => error);
}
<<<<<<< HEAD

=======
>>>>>>> 7037ad47f323656ec4db039422c9a02fa25d84b9
