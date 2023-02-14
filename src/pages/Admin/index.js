import Dashboard from "@/components/Admin";
import Header from "@/components/partials/Admin/Header";
const index = () => {
  return ` 
  ${Header()}
  ${Dashboard()}
  `;
};

export default index;
