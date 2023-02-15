import CategoryDetail from "@/components/Admin/CategoryDetail";
import Header from "@/components/partials/Admin/Header";
const CategoryDetailPage = ({ id }) => `
${Header()}
${CategoryDetail(id)}
`;
export default CategoryDetailPage;
