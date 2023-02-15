import { router, useEffect, useState } from "@/utilities";
import { updateCategory, getOneCategory } from "@/api/config";

const CategoryEdit = (id) => {
  const [category, SetCategory] = useState([]);
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const name = document.querySelector("#name-input");
    const image = document.querySelector("#image-input");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const formCategory = {
        id,
        name: name.value,
        image: "https://jthemes.net/themes/html/bolby/demo/images/avatar-2.svg",
      };
      updateCategory(formCategory).then(() => {
        router.navigate("/admin#/categorys");
      });
    });
  });
  useEffect(() => {
    getOneCategory(id).then(({ data }) => SetCategory(data));
  }, []);
  return /*html*/ ` <div class="w-9/12 float-right">
 <div class = "m-auto">
 <form action="" id="form-add">
 <h1 class="text-center text-5xl my-7">Sửa danh mục</h1>
        <div class="mb-6 w-10/12">
            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 ">Tên danh mục</label>
            <input required type="text" id="name-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" value = "${category.name}">
        </div>
        <div class="mb-6 w-10/12">
        <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 ">Ảnh</label>
        <input required type="file" id="image-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
     <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sửa</button>
 </form>
 </div>
  </div>`;
};

export default CategoryEdit;
