import Header from "@/components/partials/Admin/Header";
import ProjectEdit from "@/components/Admin/ProjectEdit";
const ProjectEditPage = ({ id }) => {
  return /*html*/ `<div>
    ${Header()}
    ${ProjectEdit(id)}
    </div>`;
};

export default ProjectEditPage;
