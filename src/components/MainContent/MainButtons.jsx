import Section from "../Section/Section.jsx";
import Tabs from "./Tabs.jsx";
import TabButton from '../TabButton.jsx';
import { EXAMPLES } from "../../../data.js";
import { useState } from "react";


export default function MainButtons() {
    //* Nội dung chính
  const [selectedTopic, setSelectedTopic] = useState("components");
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
  }
  let tabContent = "Đây là tab content!!";
    return (
        <Section title="Ví dụ về React" id="examples">
          <Tabs 
            ButtonContainer = "menu"
            button={<>
              <TabButton isSelected={selectedTopic==="components"} onClick={() => {handleSelect('components')}}>Components</TabButton>
              <TabButton isSelected={selectedTopic==="jsx"} onClick={() => {handleSelect('jsx')}}>JSX</TabButton>
              <TabButton isSelected={selectedTopic==="state"} onClick={() => {handleSelect('state')}}>Props</TabButton>
              <TabButton isSelected={selectedTopic==="props"} onClick={() => {handleSelect('props')}}>Props</TabButton>
          </>}>
          {tabContent}
          </Tabs>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic]["desc"]}</p>
            <pre>
              <code>
                {EXAMPLES[selectedTopic]["code"]}
              </code>
            </pre>
          </div>
        </Section>
    );
}