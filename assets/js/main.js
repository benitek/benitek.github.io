const ACCESS_KEY = "62d87f6e-07a0-4a85-89d3-121bf609c9e2";

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
const submitBtn = form.querySelector("button[type=submit]");

form.addEventListener("submit", async e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form));
  if (!d.name.trim() || !d.contact.trim() || !d.msg.trim()) {
    status.textContent = "Vui lòng điền họ tên, thông tin liên hệ và nội dung cần trao đổi.";
    return;
  }
  submitBtn.disabled = true;
  status.textContent = "Đang gửi...";
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: "Yêu cầu tư vấn từ website Benitek",
        from_name: "Website Benitek",
        name: d.name,
        company: d.company,
        contact: d.contact,
        message: d.msg,
        botcheck: d.botcheck || ""
      })
    });
    const json = await res.json();
    if (res.ok && json.success) {
      status.textContent = "Đã gửi thành công! Benitek sẽ liên hệ với bạn sớm.";
      form.reset();
    } else {
      throw new Error(json.message || "send failed");
    }
  } catch (err) {
    status.textContent = "Gửi chưa được. Vui lòng thử lại hoặc email trực tiếp: diemtrangtran15@gmail.com";
  } finally {
    submitBtn.disabled = false;
  }
});
