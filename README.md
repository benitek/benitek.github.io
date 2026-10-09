# Ditex (D+T) – website tĩnh

## Đưa lên GitHub Pages
1. Vào github.com, bấm **New repository**. Đặt tên `tenban.github.io` (thay `tenban` bằng username GitHub của bạn), chọn **Public**.
2. Bấm **uploading an existing file**, kéo toàn bộ file và thư mục trong bộ này vào (index.html, assets, favicon.svg, robots.txt, README.md), rồi **Commit changes**.
3. Vào **Settings → Pages**, mục Source chọn **Deploy from a branch**, nhánh **main**, thư mục **/ (root)**, bấm Save.
4. Chờ 1–2 phút, truy cập `https://tenban.github.io`.

## Cần chỉnh trước khi công khai
- `assets/js/main.js`: đổi `DITEX_EMAIL` thành email thật.
- Nếu muốn form gửi thẳng không qua ứng dụng email, dùng dịch vụ như Formspree hoặc Web3Forms.
- Thêm `<link rel="canonical">` và `sitemap.xml` khi đã có tên miền chính thức.
