import Nav from "../Pages/Nav";

const Header = () => {
  return /*html*/ `
  <header class = "bg-[#F9F9FF] fixed left-0 h-screen min-h-screen w-2/12 p-10 items-center z-10">
        <img class ="blok m-auto rounded-full w-32 h-32" src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/265336893_490447735963986_8748136013848415281_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=EOGuFUgc7eIAX-SZiQA&_nc_ht=scontent-hkg4-1.xx&oh=00_AfBAt3VaRmEVlNZlK0xU42xCXCYQNU5o_T3OrfgoadBSGA&oe=63F3EBD3" alt="">
        <nav class = "flex flex-col mt-20 menu">
                ${Nav()}
        </nav>
  </header>
  `;
};

export default Header;
