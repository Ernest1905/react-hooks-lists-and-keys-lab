import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkList = links.map((link, index) => {
    return (
      <a key={index} href={`#${link}`}>
        {link}
      </a>
    );
  });

  return <div>{linkList}</div>;
}




  


export default NavBar;
