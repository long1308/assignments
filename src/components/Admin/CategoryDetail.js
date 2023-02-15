import { getCategoriesDeteail } from "@/api/config";
import { useState, useEffect } from "@/utilities";

const CategoryDetail = (id) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getCategoriesDeteail(id).then(({ data }) => setData(data));
  }, []);
  return /*html*/ `
  <div class="flex flex-col text-center w-10/12 float-right">
  <h1 class="text-center text-5xl my-7">Danh Sách Dự Án</h1>
  
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
  <div class=" inline-block min-w-full sm:px-6 relative">
  <div class="overflow-hidden ">
  <a class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-0 left-16 my-3"  href="#/projects/add">Thêm mới</a>
      <table class="min-w-full mt-14">
        <table class="min-w-full">
          <thead class="border-b ">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                Name
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
              Image
            </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
              Tác giả
            </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
              Ngôn Ngữ
            </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                Active
              </th>
            </tr>
          </thead>
          <tbody>
          ${
            data.projects
              ? data.projects
                  .map(
                    (item, index) => /*html*/ `
              <tr class="border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${
                    index + 1
                  }</a></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${
                    item.name
                  }</a></td>
                  <td class=" w-10 h-10 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><img src="${
                    item.image
                  }" alt=""></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${
                    item.author
                  }</a></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${
                    data.name
                  }</a></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" data-id="${
                    item.id
                  }">Remove</button>
                  <a  class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"href="/admin/categorys/${
                    item.id
                  }/edit">Sửa</a></td>
              </tr>`
                  )
                  .join(" ")
              : ""
          }
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>`;
};

export default CategoryDetail;
