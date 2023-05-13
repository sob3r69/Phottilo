import './login.css';

export default () => {
  return (
    <div className="login-background">
      <div className="login-container">
        <div className="login-message">Log in</div>
        <div className="login-username">
          <div>Username</div>
          <input className="input-username" type="text"></input>
        </div>
        <div className="login-password">
          <div>Password</div>
          <input className="input-password" type="password"></input>
        </div>
        <button className="login-button">LOG IN</button>
        <a className="login-register-ref" href="">
          Register here
        </a>
      </div>
    </div>
  );
};
