// Thay email bên dưới bằng email thật của Ditex
const DITEX_EMAIL = "hello@example.com";

const burger = document.querySelector(".burger");
const menu = document.getElementById("menu");
burger.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");
});
menu.addEventListener("click", e => {
  if (e.target.tagName === "A") { menu.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); }
});
document.getElementById("y").textContent = new Date().getFullYear();

const form = document.getElementById("form");
const status = document.getElementById("status");
form.addEventListener("submit", e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form));
  if (!d.name.trim() || !d.contact.trim() || !d.msg.trim()) {
    status.textContent = "Vui lòng điền họ tên, thông tin liên hệ và nội dung cần trao đổi.";
    return;
  }
  const body = `Họ tên: ${d.name}\nDoanh nghiệp/ngành: ${d.company}\nLiên hệ: ${d.contact}\n\n${d.msg}`;
  window.location.href = `mailto:${DITEX_EMAIL}?subject=${encodeURIComponent("Yêu cầu tư vấn từ website Ditex")}&body=${encodeURIComponent(body)}`;
  status.textContent = "Đã mở ứng dụng email của bạn. Hãy bấm Gửi trong email để hoàn tất.";
});
