import { useState, useEffect } from "@/utilities";
import { getMenu } from "@/api/config";
const Nav = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    getMenu().then(({ data }) => setMenu(data));
  }, []);
  useEffect(() => {
    const listItem = document.querySelectorAll(".active");
    if (listItem[0]) {
      listItem[0].classList.add("text-red-600");
    }
    listItem.forEach((item, index) => {
      item.addEventListener("click", () => {
        document
          .querySelector(".active.text-red-600")
          .classList.remove("text-red-600");
        item.classList.add("text-red-600");
      });
    });
  });
  return /*html */ `

${menu
  .map(
    (item, index) =>
      `<a class = "mb-8  font-medium transition-all delay-200	 active" href="${item.href}">  <i class="${item.icon} pr-2 text-red-500"></i> ${item.title}</a>`
  )
  .join(" ")}

  `;
};

export default Nav;
