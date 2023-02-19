import { getPosts } from "@/api/config";
import { useEffect, useState } from "@/utilities";
const ListPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then(({ data }) => setPosts(data));
  }, []);
  return /*html*/ `
  <div class="flex flex-col text-center w-10/12 float-right">
  <h1 class="text-center text-5xl my-7">Danh Sách Bài viết</h1>
  
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
  <div class=" inline-block min-w-full sm:px-6 relative">
  <div class="overflow-hidden ">
  <a class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-0 left-16 my-3"  href="#/posts/add">Thêm mới</a>
      <table class="min-w-full mt-14">
        <table class="min-w-full">
          <thead class="border-b ">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                Ảnh
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
              Title
            </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
              Link
            </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
              Author
            </th>
            </th>
            <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
            Date
          </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                Active
              </th>
            </tr>
          </thead>
          <tbody>
          ${posts
            .map(
              (item, index) => /*html*/ `
              <tr class="border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${
                    index + 1
                  }</a></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><img class = "w-7 h-7" src="${
                    item.image
                  }" alt="">
                  </td>
                  <td class=" w-10 h-10 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${
                    item.title
                  }</td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${
                    item.link
                  }</a></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${
                    item.author
                  }</a></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${
                    item.date
                  }</a></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><button  id = "delete"class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" data-id="${
                    item.id
                  }">Remove</button>
                  <a  class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"href="/admin/projects/${
                    item.id
                  }/edit">Sửa</a></td>
              </tr>`
            )
            .join(" ")}
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>`;
};

export default ListPosts;
