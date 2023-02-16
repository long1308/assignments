const AboutMe = () => {
  return /*html*/ `
  <div class ="container  ">
        <div class ="px-16">
        <h1 class ="text-3xl my-3 font-bold ">About Me</h1>
        <div class ="flex justify-center items-center">
                <div class =" w-2/5">
                  <img class ="blok  rounded-full w-48 h-48 "src="https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/274727368_540288330979926_3385754132753723765_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=I_VWYcJ7y0oAX-_PPuz&_nc_ht=scontent-hkg4-1.xx&oh=00_AfA2pYyH-o9wIoMOHXO3xhWpEyysmZbSpSmZlT4upQt1uA&oe=63F203E8" alt="">
                </div>
                <div class = "shadow-boxShadowNew flex p-10 ">
                    <div class ="flex-1">
                        <p class ="mb-8 leading-7 text-base ">Tôi là Long dep choai, nhà phát triển web đến từ Hà Nội. Tôi có nhiều kinh nghiệm trong thiết kế, xây dựng và tùy chỉnh trang web, tôi cũng có kinh nghiệm về ReactJs.</p>
                        <div>
                            <a  class = "bg-[#FF4C60] p-3 rounded-3xl font-semibold  text-lg text-white"href="#">Tải xuống CV</a>
                        </div>
                    </div>
                    <div class = "flex-1">
                            <div class = "flex justify-between">
                                <div class="mb-1 text-base   font-semibold">HTML</div>
                                <div class="mb-1 text-base  font-semibold">80%</div>
                            </div>
                                <div class="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                                <div class="bg-yellow-400 h-2  rounded-full" style="width: 80%"></div>
                            </div>

                        <div class = "flex justify-between">
                            <div class="mb-1 text-base   font-semibold">CSS</div>
                            <div class="mb-1 text-base  font-semibold">75%</div>
                        </div>
                            <div class="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                            <div class="bg-purple-600 h-2  rounded-full" style="width: 75%"></div>
                        </div>

                        <div class = "flex justify-between">
                            <div class="mb-1 text-base   font-semibold">JavaScript</div>
                            <div class="mb-1 text-base  font-semibold">70%</div>
                        </div>
                            <div class="w-full bg-gray-200 rounded-full h-2 mb-4 dark:bg-gray-700">
                            <div class="bg-blue-600 h-2  rounded-full" style="width: 70%"></div>
                        </div>

                        
                    </div>
                </div>
        </div>
  </div>

  `;
};

export default AboutMe;
