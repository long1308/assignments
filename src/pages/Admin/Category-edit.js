import Header from "@/components/partials/Admin/Header";
import CategoryEdit from "@/components/Admin/CtegoryEdit";
const CategoryEditPage = ({ id }) => {
  return /*html*/ `<div>
    ${Header()}
    ${CategoryEdit(id)}
    </div>`;
};

export default CategoryEditPage;
