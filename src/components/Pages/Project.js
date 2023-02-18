import { useState, useEffect, render } from "@/utilities";
import { getCategories } from "@/api/config";
import { getCategoriesDeteail } from "@/api/config";
const Project = () => {
  const [project, setProject] = useState([]);
  const [categorys, setCategory] = useState([]);
  useEffect(() => {
    getCategories().then(({ data }) => setCategory(data));
  }, []);
  //sử lý
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-project");

    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const id = btn.dataset.id;
        console.log(id);
        getCategoriesDeteail(id).then(({ data: { projects } }) =>
          setProject(projects)
        );
      });
    });
  });
  return /*html*/ `
    <div class ="container  ">
        <div class ="px-16">
                <h1 class ="text-3xl my-3 font-semibold ">Project</h1>
                    <div>
                        ${categorys
                          .map(
                            (category) =>
                              /*html*/ `<button type="button" data-id = "${category.id}" class=" btn-project text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" >${category.name}</button>`
                          )
                          .join(" ")}
                    </div>
                    
                    <div class ="flex flex-wrap mt-6 transition delay-700	duration-500		">
                      ${project
                        .map(
                          (item) => /*html*/ `
                          
                          <div class="flex-wrap mr-7 shadow-boxShadowNew ">
                            <a class="relative block  bg-gray-900 group w-72 rounded-lg p-4" href="##">
                              <img
                                class="absolute inset-0 object-cover w-full h-full group-hover:opacity-50"
                                src="${item.image}"
                              />
                              <div class="relative p-5">
                                <div class="mt-40">
                                  <div
                                    class="transition-all duration-1000 transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
                                  >
                                    <div class="p-2">
                                      <p class="text-xl text-yellow-500 font-bold italic">${item.name}</p>
                                      <button class=" py-2 text-sm text-white ">author:
                                        ${item.author}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        
                          `
                        )
                        .join(" ")}
                    </div>
        </div>
    </div>


  `;
};

export default Project;
