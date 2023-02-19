import Nav from "@/components/Admin/Nav";
import { useEffect } from "@/utilities";
import dropRowMenu from "./dropRowMenu";

const Header = () => {

  return /*html*/ `
  <header class = "bg-[#F9F9FF] fixed left-0 h-screen min-h-screen w-2/12 p-10 items-center z-10 ">
        <div class = "w-[108px] h-[108px] rounded-full m-auto">
                <img src="https://jthemes.net/themes/html/bolby/demo/images/avatar-2.svg" alt="">
        </div>
        <nav class = "flex flex-col mt-20 ">
                ${Nav()}
                ${dropRowMenu()}       
        </nav>
  </header>
  `;
};

export default Header;
