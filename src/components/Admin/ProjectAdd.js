import { router, useEffect, useState } from "@/utilities";
import { addProject, getCategories } from "@/api/config";

const ProjectAdd = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategories().then(({ data }) => setCategory(data));
  }, []);
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const name = document.querySelector("#name-input");
    const image = document.querySelector("#image-input");
    const author = document.querySelector("#name-author");
    const small = document.querySelector("#small");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formProject = {
        name: name.value,
        image: "https://jthemes.net/themes/html/bolby/demo/images/avatar-2.svg",
        author: author.value,
        categoryProjectId: parseInt(small.value),
      };
      addProject(formProject).then(() => {
        router.navigate("#/admin/categorys");
      });
      console.log(formProject);
    });
  });
  return /*html*/ ` <div class="w-8/12 float-right">
 <div class = "m-auto">
 <h1 class="text-center text-5xl my-7">Thêm mới dự án</h1>
 <form action="" id="form-add">
        
        <div class="mb-6 w-10/12">
            <label for="name-input" class="block mb-2 text-sm font-medium text-gray-900 ">Tên dự án</label>
            <input required type="text" id="name-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>

        <div class="mb-6 w-10/12">
            <label for="image-input" class="block mb-2 text-sm font-medium text-gray-900 ">Ảnh</label>
            <input required type="file" id="image-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>

        <div class="mb-6 w-10/12">
            <label for="name-author" class="block mb-2 text-sm font-medium text-gray-900 ">Tác giả</label>
            <input required type="text" id="name-author" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
        <div>
            <label for="small" class="block mb-2 text-sm font-medium text-gray-900 ">Ngôn Ngữ</label>
            <select id="small" class="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Chọn 1 ngôn ngữ</option>
            ${category.map(
              (category) =>
                /*html*/ `<option value="${category.id}">${category.name}</option>`
            )}
            </select>
        </div>

     <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Thêm</button>
 </form>
 </div>
  </div>`;
};

export default ProjectAdd;
