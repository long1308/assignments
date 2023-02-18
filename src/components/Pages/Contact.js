const Contact = () => {
  return /*html*/ `
  <div class="container px-16">
  <div class=" mb-14">
    <h1 class="text-3xl my-3 font-semibold">Get In Touch</h1>
  </div>
  <div class = "flex">
    <div class="max-w-lg   mr-7 rounded-lg shadow p-10">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="name"
          >Họ tên</label
        >
        <input
          class="w-full px-3 py-2 border rounded-md"
          id="name"
          name="name"
          type="text"
          placeholder="Nhập họ tên của bạn"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="w-full px-3 py-2 border rounded-md"
          id="email"
          name="email"
          type="email"
          placeholder="Nhập email của bạn"
        />
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="message">
          Tin nhắn
        </label>
        <textarea
          class="w-full px-3 py-2 border rounded-md"
          id="message"
          name="message"
          rows="5"
          placeholder="Nhập tin nhắn của bạn"
        ></textarea>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2" for="address">
          Địa chỉ
        </label>
        <input
          class="w-full px-3 py-2 border rounded-md"
          id="address"
          name="address"
          type="text"
          placeholder="Nhập địa chỉ của bạn"
        />
        </div>
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded-md"
          type="submit"
        >
          Gửi
        </button>

    </div>
    <div class="mb-4 w-full h-full flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387200.11630255785!2d-122.4399385!3d37.773972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580f29d8f6d27%3A0x4546de1f9edc227d!2sSan%20Francisco%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2sus!4v1645068532203!5m2!1svi!2sus"
        width="100%"
        height="600"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</div>
  `;
};

export default Contact;
