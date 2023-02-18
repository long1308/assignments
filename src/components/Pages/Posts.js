const Posts = () => {
  return /*html*/ `
  <div class ="container">
        <div class ="px-16 mb-14">
        <h1 class ="text-3xl my-3 font-semibold ">About Me</h1>
        <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div class="bg-white rounded-lg shadow">
            <div class="relative overflow-hidden">
              <img class="w-full h-48 object-cover rounded-t-lg hover:scale-110 delay-300 duration-300 transition-all" src="https://jthemes.net/themes/html/bolby/demo/images/blog/1.svg" alt="Article Image">
            </div>
            <div class="p-4">
              <h2 class="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200"><a href="#">Tiêu đề bài viết</a></h2>
              <p class="text-sm text-gray-500">Mô tả ngắn gọn về bài viết</p>
              <p class="text-xs text-gray-400">Đăng vào 18/02/2023</p> <!-- Thêm phần tử hiển thị thời gian ở đây -->
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div class="bg-white rounded-lg shadow">
            <div class="relative overflow-hidden">
              <img class="w-full h-48 object-cover rounded-t-lg hover:scale-110 delay-300 duration-300 transition-all" src="https://jthemes.net/themes/html/bolby/demo/images/blog/2.svg" alt="Article Image">
            </div>
            <div class="p-4">
              <h2 class="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200"><a href="#">Tiêu đề bài viết</a></h2>
              <p class="text-sm text-gray-500">Mô tả ngắn gọn về bài viết</p>
              <p class="text-xs text-gray-400">Đăng vào 18/02/2023</p> <!-- Thêm phần tử hiển thị thời gian ở đây -->
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 lg:w-1/3 p-4">
          <div class="bg-white rounded-lg shadow">
            <div class="relative overflow-hidden">
              <img class="w-full h-48 object-cover rounded-t-lg hover:scale-110 delay-300 duration-300 transition-all" src="https://jthemes.net/themes/html/bolby/demo/images/blog/3.svg" alt="Article Image">
            </div>
            <div class="p-4">
              <h2 class="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors duration-200"><a href="#">Tiêu đề bài viết</a></h2>
              <p class="text-sm text-gray-500">Mô tả ngắn gọn về bài viết</p>
              <p class="text-xs text-gray-400">Đăng vào 18/02/2023</p> <!-- Thêm phần tử hiển thị thời gian ở đây -->
            </div>
          </div>
        </div>
        
        <!-- Thêm các phần tử danh sách bài viết khác tương tự ở đây -->
        
                </div>
        </div>
  </div>
  `;
};

export default Posts;
