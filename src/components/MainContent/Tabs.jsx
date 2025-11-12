import PropTypes from "prop-types";
export default function Tabs({children, button, ButtonContainer = "div"}){
    return (
        <>
            <ButtonContainer>{button}</ButtonContainer>
            {children}
        </>
    )
}
Tabs.propTypes = {
    children: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    ButtonContainer: PropTypes.string,
};
//Nếu muốn truyền giá trị mặc định mà không cần truyền props từ cha xuống con, ta sẽ nhận value mặc định 
//hoặc có thể truyền bất kì thẻ nào như ul, div,... hoặc cả thành phần tùy chỉnh như Section
// như ví dụ bên dưới: 
// export default function Tabs({children, button, ButtonContainer = "menu"}){
// thì khi ta không gọi ButtonContainer thì nó sẽ tự lấy giá trị mặc định là "div"
// và khi ta gọi ButtonContainer thì nó sẽ lấy giá trị ta truyền vào
// ví dụ: <Tabs ButtonContainer="section">...</Tabs> thì nó sẽ lấy giá trị là "section"