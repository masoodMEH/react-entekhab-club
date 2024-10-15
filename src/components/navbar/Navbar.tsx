import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>EntekhabAdmin</span>
      </div>
      <div className="icons">
        <img src="search.svg" alt="logo" />
        <img src="app.svg" alt="logo" />
        <img src="expand.svg" alt="logo" />
        <div className="notification">
          <img src="/notifications.svg" alt="notification" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
