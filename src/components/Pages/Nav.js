import { useState, useEffect } from "@/utilities";
import { getMenu } from "@/api/config";
const Nav = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    getMenu().then(({ data }) => setMenu(data));
  }, []);

  return /*html */ `

${menu
  .map(
    (item, index) =>
      `<a class = "ml-16 mb-8 text-black font-medium" href="${item.href}">${item.title}</a>`
  )
  .join(" ")}

  `;
};

export default Nav;
