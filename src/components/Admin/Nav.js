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
      `<a class = " mb-8 text-black font-medium focus:ring-blue-300" href="${item.href}">${item.title}</a>`
  )
  .join(" ")}
    
  `;
};

export default NavAdmin;
