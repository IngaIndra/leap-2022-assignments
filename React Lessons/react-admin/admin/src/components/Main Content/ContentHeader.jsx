import { SlPlus } from "react-icons/sl";

export default function ContentHeader({ title, button, func }) {
  return (
    <div className="d-flex justify-content-between align-items-center my-3">
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <button className="btn btn-sm btn-primary " onClick={func}>
          <SlPlus />
          {button}
        </button>
      </div>
    </div>
  );
}
