import Home from "@/components/Pages/Home";
import AboutMe from "@/components/Pages/AboutMe";
const Container = () => {
  return /*html*/ `
  <div class ='float-right w-10/12'>
  ${Home()}
  ${AboutMe()}
  </div>`;
};

export default Container;
