import { router, useEffect,useState } from "@/utilities";
import { getOnePost, updatePost } from "@/api/config";
import axios from "axios";
const PostEdit = (id) => {
  const [post, setPosts] = useState([]);
  useEffect(() => {
    getOnePost(id).then(({ data }) => setPosts(data));
  }, []);

  useEffect(() => {
    const form = document.querySelector("#form-add");
    const image = document.querySelector("#image-input");
    const name = document.querySelector("#title-input");
    const link = document.querySelector("#name-link");
    const author = document.querySelector("#name-author");
    const date = document.querySelector("#date");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const listImage = await uploadFilesImage(image.files);
      const formPost = {
        id,
        image: listImage,
        title: name.value,
        link: link.value,
        author: author.value,
        date: date.value,
      };
      updatePost(formPost).then(() => {
        router.navigate("/#/admin/posts");
      });
      console.log(formPPost);
    });
  });
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

  return /*html*/ ` <div class="w-8/12 float-right">
 <div class = "m-auto">
 <h1 class="text-center text-5xl my-7">Thêm mới bài viết</h1>
 <form action="" id="form-add">
        
        <div class="mb-6 w-10/12">
            <label for="image-input" class="block mb-2 text-sm font-medium text-gray-900 ">Ảnh</label>
            <input required multiple  type="file" id="image-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
        <div class="mb-6 w-10/12">
            <label for="title-input" class="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
            <input required value = "${post.title}" type="text" id="title-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
        <div class="mb-6 w-10/12">
            <label for="name-link" class="block mb-2 text-sm font-medium text-gray-900 ">Link</label>
            <input required type="text" value = "${post.link}" id="name-link" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>

        <div class="mb-6 w-10/12">
            <label for="name-author" class="block mb-2 text-sm font-medium text-gray-900 ">Tác giả</label>
            <input required type="text" value = "${post.author}" id="name-author" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>
        <div>
            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 ">Date</label>
            <input required type="date" id="date" value = "${post.date}" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
        </div>

     <button type="submit" class=" mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Thêm</button>
 </form>
 </div>
  </div>`;
};

export default PostEdit;
