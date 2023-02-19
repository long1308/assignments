import PostAdd from '@/components/Admin/PostAdd'
import Header from "@/components/partials/Admin/Header";
const PostsAddPage = () => {
  return /*html*/`
  ${Header()}
    ${PostAdd()}
  `;
};

export default PostsAddPage;
