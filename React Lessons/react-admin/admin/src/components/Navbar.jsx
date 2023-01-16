import NavbarDropdown from "./Navbar/NavbarDropdown";
import NavbarMenu from "./Navbar/NavbarMenu";
import NavbarWrapper from "./Navbar/NavbarWrapper";

export default function Navbar({ onToggle }) {
  const menuItems = [
    { label: "Home", link: "/" },
    { label: "Articles", link: "/articles" },
    { label: "Feedback", link: "#" },
    { label: "Files", link: "#" },
  ];
  const dropdownItems = [
    { label: "Profile", link: "#" },
    { label: "Inbox", link: "#" },
    { label: "Settings", link: "#" },
    { label: "---", link: "#" },
    { label: "Sign out", link: "#" },
  ];

  return (
    <NavbarWrapper>
      <NavbarMenu title="Admin" items={menuItems} onToggle={onToggle} />
      <NavbarDropdown
        items={dropdownItems}
        img="https://static.vecteezy.com/system/resources/thumbnails/006/256/468/small/classic-vintage-retro-label-badge-for-clothing-apparel-circle-logo-emblem-design-template-element-vector.jpg"
      />
    </NavbarWrapper>
  );
}
