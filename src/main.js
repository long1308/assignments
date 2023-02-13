// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
// css module
import classes from "./main.module.css";

import { router, render } from "./utilities";

const app = document.querySelector("#app");

//pages
import HomePage from "./pages/HomePage";

router.on("/", () => render(HomePage, app));
 router.resolve();
