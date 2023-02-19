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
// thêm mới danh mục
const addCategory = (category) => {
  return instance.post("/categoryProjects", category);
};
// lấy 1 danh mục
const getOneCategory = (id) => {
  return instance.get(`/categoryProjects/${id}`);
};
// update danh muc
const updateCategory = (category) => {
  return instance.put(`/categoryProjects/${category.id}`, category);
};
// xóa danh muc
const deleteCategory = (id) => {
  return instance.delete(`/categoryProjects/${id}`);
};
// lấy all projects
const getProject = () => {
  return instance.get(`/projects`);
};
// thêm mới projects
const addProject = (project) => {
  return instance.post(`/projects`, project);
};
// xóa projects
const deleteProject = (id) => {
  return instance.delete(`/projects/${id}`);
};
// lấy 1 project
const getOneProject = (id) => {
  return instance.get(`/projects/${id}`);
};
// update danh muc
const updateProject = (project) => {
  return instance.put(`/projects/${project.id}`, project);
};
// lấy danh sách post
const getPosts = () => {
  return instance.get(`/posts`);
};
// lấy danh sách bài viết

export {
  getMenu,
  getMenuAdmin,
  getCategories,
  getCategoriesDeteail,
  addCategory,
  deleteCategory,
  getOneCategory,
  updateCategory,
  addProject,
  deleteProject,
  getOneProject,
  updateProject,
  getPosts,
  getProject,
};
