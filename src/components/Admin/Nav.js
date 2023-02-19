import { useState, useEffect } from "@/utilities";
import { getMenuAdmin } from "@/api/config";
const NavAdmin = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    getMenuAdmin().then(({ data }) => setMenu(data));
  }, []);

  return /*html */ `

${menu
  .map(
    (item, index) =>
      `<a class = "ml-12 mb-8 text-black font-medium" href="${item.href}">${item.title}</a>`
  )
  .join(" ")}
    
  `;
};

export default NavAdmin;
