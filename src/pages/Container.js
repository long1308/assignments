import Home from "@/components/Pages/Home";
import AboutMe from "@/components/Pages/AboutMe";
import Project from "@/components/Pages/Project";
const Container = () => {
  return /*html*/ `
  <div class ='float-right w-10/12'>
  ${Home()}
  ${AboutMe()}
  ${Project()}
  </div>`;
};

export default Container;
