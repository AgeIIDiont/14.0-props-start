import { myData } from "../../../data.js";
import Section from "../Section/Section.jsx";
import MainContent from "./MainContent.jsx";

export default function MainContents() {
    return (
        <Section title="Khái niệm chính trong React" id="core-concepts">
            <ul>
                {/*<MainContent{...myData[0]}/>
                <MainContent{...myData[1]}/>
                <MainContent{...myData[2]}/>
                <MainContent{...myData[3]}/>*/}
                {myData.map((item) => (
                <MainContent key={item.title} {...item} />
                ))}
            </ul>
        </Section>
    );
}