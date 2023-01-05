import ContentHeader from "./ContentHeader";
import ContentWrapper from "./ContentWrapper";
import ContentTable from "./ContentTable";

export default function MainContent({ func }) {
  return (
    <ContentWrapper>
      <div>
        <ContentHeader title="Blog posts" button=" Create" func={func} />
        <ContentTable />
      </div>
    </ContentWrapper>
  );
}
