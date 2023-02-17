import { useEffect, useState } from "@/utilities";
import { getCategories, deleteCategory } from "@/api/config";
const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategories().then(({ data }) => setCategory(data));
  }, []);
  useEffect(() => {
    const btns = document.querySelectorAll("#delete");
    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        deleteCategory(id).then(() => {
          const newCategory = category.filter((c) => c.id != id);
          setCategory(newCategory);
        });
      });
    });
  });
  return /*html*/ ` 
  <div class="flex flex-col text-center w-10/12 float-right">
  <h1 class="text-center text-5xl my-7">Danh Sách Danh Mục</h1>
  
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
  <div class=" inline-block min-w-full sm:px-6 relative">
  <div class="overflow-hidden ">
  <a class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute top-0 left-16 my-3"  href="/#/categorys/add">Thêm mới</a>
      <table class="min-w-full mt-14">
      <thead class="border-b ">
            <tr>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                #
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                Ngôn Ngữ
              </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
              Image
            </th>
              <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                Active
              </th>
            </tr>
          </thead>
          <tbody>
          ${category
            .map(
              (item, index) => /*html*/ `
             
              <tr class="border-b">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><a href="#/admin/categorys/${
                    item.id
                  }">${index + 1}</a></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><a href="#admin/categorys/${
                    item.id
                  }">${item.name}</a></td>
                  <td class=" w-5 h-5 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><img src="${
                    item.image
                  }" alt=""></td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <button  class=" m-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><button id ="delete" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" data-id="${
                    item.id
                  }">Remove</button>
                  <a class = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"href="/#/admin/categorys/${
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
</div>
  `;
};

export default Category;
