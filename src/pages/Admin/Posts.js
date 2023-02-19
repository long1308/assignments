import ListPosts from "@/components/Admin/ListPosts";
import Header from "@/components/partials/Admin/Header";
const Posts = () => {
  return /*html*/ `
  ${Header()}
  ${ListPosts()}
  `;
};

export default Posts;
