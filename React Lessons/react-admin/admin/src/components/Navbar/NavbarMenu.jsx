import { Link } from "react-router-dom";

function NavbarMenuItem({ item }) {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={item.link}>
        {item.label}
      </Link>
    </li>
  );
}

export default function NavbarMenu({ items = [], title = "", onToggle }) {
  return (
    <>
      <button
        className="navbar-toggler"
        type="button"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={onToggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse">
        <a className="navbar-brand" href="/">
          {title}
        </a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {items.map((item, index) => (
            <NavbarMenuItem item={item} key={`menu-item-${index}`} />
          ))}
        </ul>
      </div>
    </>
  );
}
