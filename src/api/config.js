import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:3000",
});
//get menu
const getMenu = () => {
  return instance.get("/menu");
};

//menu admin
const getMenuAdmin = () => {
  return instance.get("/menuAdmin");
};

// lấy categorys
const getCategories = () => {
  return instance.get("/categoryProjects");
};
// lấy chi tiết danh mục
const getCategoriesDeteail = (id) => {
  return instance.get(`/categoryProjects/${id}?_embed=projects`);
};

// xóa dữ liệu
const deleteProject = (id) => {
  return instance.delete(`/projects/${id}?_embed=projects`);
};
export { getMenu, getMenuAdmin, getCategories, getCategoriesDeteail };
