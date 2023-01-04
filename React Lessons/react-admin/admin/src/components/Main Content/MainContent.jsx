import Select from "react-select";
import { useState } from "react";
import ContentHeader from "./ContentHeader";
import ContentWrapper from "./ContentWrapper";
import ContentTable from "./ContentTable";

export default function MainContent() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [selectedOptions, setSelectedOptions] = useState([]);
  return (
    <ContentWrapper>
      <hr />
      <Select
        value={selectedOptions}
        onChange={setSelectedOptions}
        options={options}
        isMulti={true}
      />
      <hr />
      <div>
        <ContentHeader title="Blog posts" button=" Add shit" />
        <ContentTable />
      </div>
    </ContentWrapper>
  );
}
