const Navigation = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="../src/assets/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li style={{ cursor: "pointer" }} className="links">
          Menu
        </li>
        <li style={{ cursor: "pointer" }} className="links">
          Location
        </li>
        <li style={{ cursor: "pointer" }} className="links">
          About
        </li>
        <li style={{ cursor: "pointer" }} className="links">
          Contact
        </li>
      </ul>

      <button style={{ cursor: "pointer", borderRadius: "15px" }}>login</button>
    </nav>
  );
};

export default Navigation;
