import React from "react"
import { useHistory } from "react-router"

function Login() {
  let history = useHistory();

  return (
    <div>
      <input type="text" placeholder="username" />
      <input type="text" placeholder="password" />
      <button onClick={() => {history.push("/signup")}}>Login</button>
    </div>
  );
}

export default Login;