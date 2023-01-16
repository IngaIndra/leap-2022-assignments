import MainContent from "../components/Main Content/MainContent";

export default function Articles({ handleShow }) {
  return (
    <div className="container-sm body-container">
      <MainContent func={handleShow} />
    </div>
  );
}
