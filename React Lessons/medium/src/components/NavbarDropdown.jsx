import { useState } from "react";
import MainButton from "./MainButton";

function DropdownDivider() {
  return (
    <li>
      <hr className="dropdown-divider" />
    </li>
  );
}
function DropdownItem({ item }) {
  return (
    <li>
      <a className="dropdown-item" href={item.link}>
        {item.label}
      </a>
    </li>
  );
}

export default function NavbarDropdown({ img, items }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <div className="dropdown text-end">
        <a
          onClick={toggleDropdown}
          href
          className="d-block link-dark text-decoration-none dropdown-toggle"
          aria-expanded="false"
        >
          <img
            src={img}
            alt="mdo"
            width="32"
            height="32"
            className="rounded-circle bg-white  "
          />
        </a>
        <ul
          className={`dropdown-menu text-small end-0 ${
            showDropdown && "show test"
          }`}
        >
          <li>
            <div className="dropdownTop">
              <div className="dropdownHead">Get started on Medium</div>
              <li className="">
                <MainButton variant={"default"}>Sign Up</MainButton>
              </li>
              <li>
                <MainButton variant="reverted">Sign In</MainButton>
              </li>
            </div>
            <hr />
            <div className="dropdownBottom">
              {items.map((item, index) => {
                return (
                  <DropdownItem item={item} key={`dropdown-item-${index}`} />
                );
              })}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
