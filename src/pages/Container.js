import Home from "@/components/Pages/Home";
import AboutMe from "@/components/Pages/AboutMe";
import Project from "@/components/Pages/Project";
import Contact from "@/components/Pages/Contact";
import Posts from "@/components/Pages/Posts";
import { useEffect } from "@/utilities";
const Container = () => {
  useEffect(() => {
    const section = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".menu a");
    console.log(navLinks);
    if (navLinks[0]) {
      navLinks[0].classList.add("text-red-600");
    }
    // sử lý
    window.onscroll = () => {
      section.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        console.log(offset);
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links =>{
              links.classList.remove('text-red-600');
              document.querySelector('.menu a[href*=' + id + ']').classList.add('text-red-600');
            })
        }
      });
    };
  });
  return /*html*/ `
  <div class ='float-right w-10/12 pb-16'>
  ${Home()}
  ${AboutMe()}
  ${Project()}
  ${Posts()}
  ${Contact()}
  </div>`;
};

export default Container;
