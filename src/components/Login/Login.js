import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";

const Login = () => {
  const { user, googleSignin } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const googleHandleSignin = () => {
    googleSignin().then(() => {
      history.push(redirect_uri);
    });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <form action="#">
          <div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="" id="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="email" name="" id="password" />
            </div>
            <div>
              <input type="submit" value="submit" />
            </div>
          </div>
        </form>
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>Login Alternative way</h2>
        <div style={{ textAlign: "center" }}>
          <button onClick={googleHandleSignin}>Google</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
