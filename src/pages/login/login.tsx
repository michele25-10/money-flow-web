import "./login.scss";

const handleLogin = () => {
  console.log("Login");
  location.href = "http://localhost:5173/";
};

function Login() {
  return (
    <div className="background">
      <div className="containerLogin">
        <div className="imgLogo">
          <img
            src="https://us.123rf.com/450wm/popcornarts/popcornarts2311/popcornarts231102334/218740987-asset-and-money-icon-concept.jpg?ver=6"
            alt=""
          />
        </div>
        <div className="formData">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="cliente"
              placeholder="Cliente..."
            />
          </div>
          <div className="mb-3">
            <input
              type="username"
              className="form-control"
              id="username"
              aria-describedby="usernameHelp"
              placeholder="Username..."
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password..."
            />
          </div>
          <div className="submit-button mt-3">
            <button className="btn" onClick={() => handleLogin()}>
              Accedi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
