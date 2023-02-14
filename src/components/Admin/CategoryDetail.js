import { getCategoriesDeteail } from "@/api/config";
import { useState, useEffect } from "@/utilities";

const CategoryDetail = (id) => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    getCategoriesDeteail(id).then((data) => console.log(data));
  }, []);
  return /*html*/ `<div>
    
  </div>`;
};

export default CategoryDetail;
