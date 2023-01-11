export default function MainButton({ href, children, variant }) {
  if (variant === "reverted")
    return (
      <a href={href} className="btn dropdown-btn main-btn-reverted">
        {children}
      </a>
    );
  return (
    <a href={href} className="btn dropdown-btn main-btn">
      {children}
    </a>
  );
}
