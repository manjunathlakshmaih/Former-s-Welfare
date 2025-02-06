import "./Navbar.css";

const Navbar = () => {
  const Items = ["Home", "About", "contact", "more"];
  return (
    <div className="nav">
      <div className="nav-logo">
        Farmers welfare
      </div>
      <ul className="nav-menu">
        {Items.map((item, index) => (
          <li className="nav-items-list" key={index}>{item}</li> 
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
