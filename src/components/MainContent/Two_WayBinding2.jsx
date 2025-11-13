import { useState } from "react";
export default function Two_WayBinding2() {
    //khai báo state để lưu giá trị của input
        const [user, setUser] = useState({fullName: "", email: ""});
        //hàm xử lý khi người dùng nhập liệu
        const handleChange = (e) => {
            //dùng Destructuring để lấy ra name và value từ event target
            const { name, value } = e.target;
            //cập nhật lại state user
            setUser((prevUser) => ({ //prevUser là giá trị user hiện tại
                ...prevUser, //... là toán tử spread để trải các thuộc tính khác của user
                [name]: value, //cập nhật thuộc tính tương ứng với name với value mới
            }));
        };
    return (
        <>
            <h2>Nhập thông tin cá nhân người chơi</h2>
            <label>
                Họ và tên:
                <input type="text" name="fullName" value={user.fullName} onChange={handleChange} />
            </label>
            <br/>
            <label>
                Email:
                <input type="text" name="email" value={user.email} onChange={handleChange} />
            </label>
            <h3>Thông tin đã nhập</h3>
            <p>Họ và tên: {user.fullName}</p>
            <p>Email: {user.email}</p>
        </>
    );
}