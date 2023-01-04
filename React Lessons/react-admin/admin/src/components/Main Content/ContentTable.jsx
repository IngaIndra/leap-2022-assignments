import { SlGhost, SlStar } from "react-icons/sl";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th width="1">#</th>
        <th>Name</th>
        <th>Description</th>
        <th width="1">Actions</th>
      </tr>
    </thead>
  );
}

function TableRow({ index, item }) {
  return (
    <tr key={`${index}`}>
      <td scope="row">{index + 1}</td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td style={{ whiteSpace: "nowrap" }}>
        <button className="btn btn-sm btn-outline-primary me-3">
          <SlStar />
        </button>
        <button className="btn btn-sm btn-outline-danger">
          <SlGhost />
        </button>
      </td>
    </tr>
  );
}

function TableBody() {
  const items = [
    {
      title: "Huurhun",
      description: "...",
    },
    {
      title: "Aimr huurhun",
      description: "...",
    },
    {
      title: "Buur huurhun",
      description: "...",
    },
  ];

  return (
    <tbody>
      {items.map((item, index) => {
        return <TableRow item={item} index={index} />;
      })}
    </tbody>
  );
}

export default function ContentTable({}) {
  return (
    <table className="table table-bordered table-hover">
      <thead>
        <tr>
          <th width="1">#</th>
          <th>Name</th>
          <th>Description</th>
          <th width="1">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Huurhun</td>
          <td>...</td>
          <td style={{ whiteSpace: "nowrap" }}>
            {/* <Button type=""></Button> */}
            <button className="btn btn-sm btn-outline-primary me-2">
              <SlStar />
            </button>
            <button className="btn btn-sm btn-outline-danger">
              <SlGhost />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
