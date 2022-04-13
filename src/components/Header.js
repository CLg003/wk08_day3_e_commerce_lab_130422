import React from "react";



const Header = ({user}) => {
  return (
    <>
      <header>
        <h1>Ye Olde Ping Pong Shop</h1>
        <p>Welcome {user.name}</p>
      </header>
    </>
  );
};

export default Header;
