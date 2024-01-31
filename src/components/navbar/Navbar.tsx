import "./navbar.scss";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="logo.svg" alt="logo" />
          <span>Money-Flow</span>
        </div>
        <div className="icons">
          <div className="user">
            <img
              src="https://avatars.githubusercontent.com/u/72445614?v=4"
              alt="img-profilo"
            />
            <span>Michele Gabrieli</span>
          </div>
          <div className="logout"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
