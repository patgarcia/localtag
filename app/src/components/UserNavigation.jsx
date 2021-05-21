import React, { useEffect, useState } from "react";
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'

function UserNavigation(props) {
  const apiURL = process.env.REACT_APP_API_URL;

  const [showNav, setShowNav] = useState(null);
  const [errMessage, setErrMessage] = useState(null);

  // Check if user is looged in already at load
  // useEffect(() => {
  //   fetch(`${apiURL}/auth/isloggedin`)
  //   .then((res) => res.status)
  //   .then((status) => setShowNav(status == 200)
  //   )
  // }, [])

  function handleLogin(ev) {
    ev.preventDefault();
    setErrMessage(null);
    const data = new FormData(ev.target);
    const loginData = Object.fromEntries(data.entries());
    console.log(JSON.stringify(loginData));
    fetch(`${apiURL}/auth/login`, {
      method: "post",
      body: JSON.stringify(loginData),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.status)
      .then((status) => {
          if(status == 200) setShowNav(true)
          else setErrMessage('Wrong User / Password combination')
          console.log(status);
        })
  }

  function handleLogout(ev) {
    ev.preventDefault();
    fetch(`${apiURL}/auth/logout`)
    setShowNav(false);
  }

  return (
    <div style={{textAlign: 'center'}}>
      { errMessage && <p style={{color:'red'}}>{errMessage}</p> }
      {!showNav ? (
        <form onSubmit={handleLogin}>
          <TextField name="email" type="text" label="email"/>
          <TextField name="password" type="password" label="password"/>
          <button style={{display:'block', margin: '20px auto'}}>Login</button>
        </form>
      ) : (
        <nav>
          <h3>Hello</h3>
          <ul style={{listStyle: 'none', padding: 'none', margin: 'none', textAlign: 'center', 'padding-inline-start':0}}>
            {/* <li>
              <button>Change Password</button>
            </li> */}

              <Button variant="contained" color="primary" onClick={handleLogout}>Logout</Button>

          </ul>
        </nav>
      )}
    </div>
  );
}

export default UserNavigation;
