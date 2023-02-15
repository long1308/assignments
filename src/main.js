// bootstrap
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.js";
// css module
import classes from "./main.module.css";

import { router, render } from "./utilities";

const app = document.querySelector("#app");

//pages
import HomePage from "./pages/HomePage";

router.on("/", () => render(HomePage, app));

//Quản lý admin
import index from "./pages/Admin";
import CategorysPage from "./pages/Admin/CategorysPage";
import CategoryDetailPage from "./pages/Admin/CategoryDetailPage";
import CtegorysAdd from "./pages/Admin/Ctegorys-add";
import CategoryEditPage from "./pages/Admin/Category-edit";

router.on("/admin", () => render(index, app));
router.on("/categorys", () => render(CategorysPage, app));
router.on("/categorys/add", () => render(CtegorysAdd, app));
router.on("/admin/categorys/:id/edit", ({ data }) =>
  render(() => CategoryEditPage(data), app)
);
router.on("/admin/categorys/:id", ({ data }) =>
  render(() => CategoryDetailPage(data), app)
);
router.resolve();
