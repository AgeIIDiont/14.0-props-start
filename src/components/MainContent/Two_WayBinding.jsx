import { useState } from "react";
export default function Two_WayBinding() {
    //khai báo state để lưu giá trị của input
        const [playerName, setPlayerName] = useState("Player 1");
        //hàm xử lý khi người dùng nhập liệu
        const handleChange = (e) => {
            setPlayerName(e.target.value);
        };
    return (
        <>
            <h2>Nhập tên người chơi</h2>
            <input type="text" value={playerName} onChange={handleChange} />
            <p>Bạn đã nhập: {playerName}</p>
        </>
    );
}