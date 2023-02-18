import { getPosts } from "@/api/config";
import { useEffect, useState } from "@/utilities";
const Posts = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    getPosts().then(({ data }) => setPost(data));
  }, []);

  return /*html*/ `
  <div class ="container">
        <div class ="px-16 mb-14">
        <h1 class ="text-3xl my-3 font-semibold ">Latest Posts
        </h1>
        <div class="flex flex-wrap -mx-4">
        ${post.map(
          (item) => /*html*/ `
        <a href="">
        <div class="w-full md:w-1/2 lg:w-1/4 p-3">
        <div class="bg-white rounded-lg shadow h-full">
          <div class="relative overflow-hidden">
            <img class="w-full h-48 object-cover rounded-t-lg hover:scale-110 delay-300 duration-300 transition-all" src="https://jthemes.net/themes/html/bolby/demo/images/blog/1.svg" alt="Article Image">
          </div>
          <div class="p-4">
            <h2 class="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200"><a href="#">${item.title}</a></h2>
            <p class="text-sm text-gray-500">${item.author}</p>
            <p class="text-xs text-gray-400">${item.date}</p> <!-- Thêm phần tử hiển thị thời gian ở đây -->
          </div>
        </div>
      </div>
        </a>
        `
        )}
        </div>
  </div>
  `;
};

export default Posts;
