import PostEdit from "@/components/Admin/PostEdit";
import Header from "@/components/partials/Admin/Header";
const PostsEditPage = ({id}) => {
  return /*html*/ `
  ${Header()}
    ${PostEdit(id)}
  `;
};

export default PostsEditPage;
