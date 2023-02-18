import Home from "@/components/Pages/Home";
import AboutMe from "@/components/Pages/AboutMe";
import Project from "@/components/Pages/Project";
import Contact from "@/components/Pages/Contact";
import Posts from "@/components/Pages/Posts";
const Container = () => {
  return /*html*/ `
  <div class ='float-right w-10/12'>
  ${Home()}
  ${AboutMe()}
  ${Project()}
  ${Posts()}
  ${Contact()}
  </div>`;
};

export default Container;
