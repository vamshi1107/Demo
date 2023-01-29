import "./header.css";

export default () => {
  return (
    <div className="header">
      <div className="logo">
        <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"></img>
      </div>
      <div className="search-con">
        <select>
          <option>Hyderabad</option>
          <option>Delhi</option>
        </select>
        <input placeholder="Search"></input>
      </div>
      <div className="login-con">
        <div>Login</div>
        <div>Signup</div>
      </div>
    </div>
  );
};
