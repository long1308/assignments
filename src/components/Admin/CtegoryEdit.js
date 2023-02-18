import { router, useEffect, useState } from "@/utilities";
import { updateCategory, getOneCategory } from "@/api/config";
import axios from "axios";

const CategoryEdit = (id) => {
  const [category, SetCategory] = useState([]);
  useEffect(() => {
    const form = document.querySelector("#form-add");
    const name = document.querySelector("#name-input");
    const image = document.querySelector("#image-input");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const listImage = await uploadFilesImage(image.files);
      const formCategory = {
        id,
        name: name.value,
        image: listImage,
      };
      updateCategory(formCategory).then(() => {
        router.navigate("/#/admin/categorys");
      });
    });
  });
  useEffect(() => {
    getOneCategory(id).then(({ data }) => SetCategory(data));
  }, []);
  const uploadFilesImage = async (files) => {
    if (files) {
      const CLOUD_NAME = "dpsl2xj1j";
      const PRESET_NAME = "upload-image";
      const FOLDER_NAME = "imageProfile";
      const urls = [];
      const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
      const formData = new FormData(); // key và value
      formData.append("upload_preset", PRESET_NAME);
      formData.append("folder", FOLDER_NAME);
      for (const file of files) {
        formData.append("file", file);
        const response = await axios.post(api, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        urls.push(response.data.secure_url);
        // console.log(urls);
      }
      return urls;
    }
  };
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
        <input required multiple type="file" id="image-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
     <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sửa</button>
 </form>
 </div>
  </div>`;
};

export default CategoryEdit;
