import { useEffect } from "@/utilities";
const dropRowMenu = () => {
  useEffect(() => {
    const btn = document.querySelector("#dropdownButton");
    const menu = document.querySelector("#dropdown");
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  });
  return /*html*/ ` 
  <button id="dropdownButton"  class="font-medium rounded-lg text-sm  py-2.5 text-center inline-flex items-center " type="button">Profile <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
  <!-- Dropdown menu -->
  <div id="dropdown" class="z-10 hidden bg-[#F9F9FF] divide-y divide-gray-100 rounded-lg shadow w-44 ">
      <ul class="py-2 text-sm text-gray-700 " aria-labelledby="dropdownDefaultButton">
        <li>
          <a href="/#/admin/posts" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Posts</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
        </li>
      </ul>
  </div>`;
};

export default dropRowMenu;
