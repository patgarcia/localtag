import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import UserNavigation from './UserNavigation'

function EditForm(props) {

    const apiURL = process.env.REACT_APP_API_URL;

    const [postURL, setPostURL] = useState(null)

    // ERAS
    useEffect(() => {
      fetch(`${apiURL}`)
        // .then(res => res.json())
        .then(res => res)
        .then(res => console.log('THIS IS THE CONSOLE',res))
    }, [])

    const location = useLocation();
    useEffect(() => {
        setPostURL('/'+(location.pathname.slice(1).split('/').shift() || 'collections'));
    }, [location])

    function handlePost(ev) {
        ev.preventDefault();
        const data = new FormData(ev.target);
        const formData = Object.fromEntries(data.entries());
        console.log(JSON.stringify(formData));
        fetch(`${apiURL}${postURL}`, {
          method: "post",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        })
          // .then((res) => res.json())
          .then(res => console.log(res))
          .catch(console.error)
        //   .then((status) => {
        //       console.log(status);
        //       return status
        //     })
      }

    return (
        <div>
            {/* <p>{ postURL ? postURL : 'no url' }</p> */}
            <form onSubmit={handlePost}>
                <input type='text' name="name"></input>
                <button>Create { postURL ? postURL.slice(1) : 'no url' }</button>
            </form>
        </div>
    );
}

export default EditForm;
