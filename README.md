# React + Vite

+ Vào Terminal đưa đường dẫn đến đúng file bài.
+ Nhập lần lượt: 
npm install
npm run dev
+ Ctrl + R_Click vào http://localhost:5174

14.20-23: tạo component tab/ tab menu
tạo các component tương tự những gì đã học nhằm tối tưu hóa code
children: những j nằm giữa cặp thẻ đóng mở
15: Sai lầm khi dùng useState
useState nhận một giá trị khởi tạo (initState) làm đối số
Trả về một mảng gồm hai phần tử: giá trị hiện tại của state và một hàm để cập nhật state đó (destructuring trong js)
arrow function có cấu trúc: () => function()
16: Two - WayBinding
+ (state = UI) là cơ chế giúp đồng bộ dữ liệu giữa giao diện người dùng (UI) và state trong React.
- Khi dữ liệu trong UI thay đổi - state sẽ cập nhật ngay lập tức. Khi state thay đổi → UI sẽ tự động cập nhật theo.
- Điều này giúp việc quản lý dữ liệu trở nên dễ dàng hơn, đặc biệt là trong các form nhập liệu.
Two-Way Binding trong React không chỉ dùng với input mà có thể áp dụng với nhiều thành phần UI khác như checkbox, radio, select, range, toggle, v.v.
