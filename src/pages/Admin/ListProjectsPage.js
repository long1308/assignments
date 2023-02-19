import ListProjects from "@/components/Admin/ListProjects";
import Header from "@/components/partials/Admin/Header";
const ListProjectsPage = () => {
  return /*html*/ `
  ${Header()}
    ${ListProjects()}
  `;
};

export default ListProjectsPage;
