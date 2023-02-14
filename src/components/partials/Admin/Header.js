import Nav from "@/components/Admin/Nav";

const Header = () => {
  return /*html*/ `
  <header class = "bg-[#353353] fixed left-0 h-screen min-h-screen w-64 p-10 items-center ">
        <div class = "w-[108px] h-[108px] rounded-full m-auto">
                <img src="https://jthemes.net/themes/html/bolby/demo/images/avatar-2.svg" alt="">
        </div>
        <nav class = "flex flex-col mt-20">
                ${Nav()}
        </nav>
  </header>
  `;
};

export default Header;
