import { useEffect, useState } from "@/utilities";
import { getCategories } from "@/api/config";
const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategories().then(({ data }) => setCategory(data));
  }, []);
  return /*html*/ ` 
<div>
${category
  .map(
    (item, index) => `<a href="/admin/categorys/${item.id}">${item.name}</a>`
  )
  .join(" ")}
</div>
  `;
};

export default Category;
