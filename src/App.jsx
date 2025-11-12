import Header from "./components/Header/Header.jsx";
import MainContents from "./components/MainContent/MainContents.jsx";
import MainButtons from "./components/MainContent/MainButtons.jsx";
import ExampleHomeW from "./components/MainContent/ExampleHomeW.jsx";
import Two_WayBinding from "./components/MainContent/Two_WayBinding.jsx";

function App() {



  
  // const [sTopic, setSTopic] = useState("Chào bạn!");
  // const currentHours = new Date().getHours();
  // const currentHours = 11.5;
  // function timeHello(selectTime){
  //   if(selectTime >= 5 && selectTime < 12){
  //     return setSTopic("Chào buổi sáng!");
  //   } else if (selectTime >= 12 && selectTime < 18){
  //     return setSTopic("Chào buổi chiều!");
  //   } else {
  //     return setSTopic("Chào buổi tối!");
  //   }
    
  // }
  // return(
  //   <section id="top-banner">
  //       <h1>Học ReactJS Cơ Bản</h1>
  //       <p>Tìm hiểu các khái niệm chính và ví dụ về ReactJS</p>

  //       <button onClick={() => timeHello(currentHours)}>Cập nhật lời chào</button>
  //       <h2>{sTopic}</h2>

  //     </section>
  // )
  return (
    <>
      <Header />
      <main>
        <MainContents></MainContents>
        <MainButtons></MainButtons>
        <ExampleHomeW></ExampleHomeW>
        <Two_WayBinding></Two_WayBinding>
      </main>
    </>
  );
}

export default App;