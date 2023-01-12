import smallLogo from "../images/logo-small.svg";
import MainButton from "./MainButton";
import SearchIcon from "./img/SearchIcon.jsx";
import WriteIcon from "./img/WriteIcon";
import { useState } from "react";
import NavbarDropdown from "./NavbarDropdown";
import noImg from "../images/no-img.svg";
import StarLogo from "./img/StarLogo.jsx";
export default function SlimNav() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const dropdownItems = [
    { label: "Become a member", link: "#", img: <StarLogo /> },
    { label: "Apply to the Partner Program", link: "#" },
    { label: "Gift a membership", link: "#" },
  ];
  return (
    <div className="d-flex justify-content-between py-2 px-4 align-items-center slim-nav">
      <div>
        <div className="d-flex">
          <img src={smallLogo} alt="" className="me-3" />
          <form className="position-relative ">
            <input
              type="text"
              className="form-control search-input"
              placeholder="Search Medium"
            />
            <button className="btn search-button">
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>
      <div>
        <ul className="d-flex align-items-center slim-nav-menu">
          <li>
            <a href="#" className="slim-nav-link">
              <WriteIcon />
              Write
            </a>
          </li>
          <li>
            <MainButton>Sign up</MainButton>
          </li>
          <li>
            <a href="#" className="slim-nav-link">
              Sign in
            </a>
          </li>
          <li>
            <NavbarDropdown items={dropdownItems} img={noImg} />
          </li>
        </ul>
      </div>
    </div>
  );
}
