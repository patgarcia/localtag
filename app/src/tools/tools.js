// Example from a component file

// import React, { useEffect, useState } from "react";
// function Header(props) {
//     const [tags, setTags] = useState();
//     const apiURL = "http://localhost:4000/";
//     useEffect(
//       () => fetch(apiURL + "tags")
//         .then((res) => res.json())
//         .then((res) => setTags(res)),
//       []
//     );
//     return (
//       <div>
//         { tags ? tags.map(tag => <p>{tag.name}</p>) : '' }
//       </div>
//     );
//   }
//   export default Header;
