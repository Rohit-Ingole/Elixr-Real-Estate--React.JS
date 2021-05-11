import { useState, useEffect } from "react";

import { menuData } from "../../data/MenuData";
import Button from "../Button";

import * as style from "./styles";

function Navbar({ toggle }) {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <style.Nav scrollNav={scrollNav}>
      <style.Logo to="/">ELIXR</style.Logo>

      <style.Menubars onClick={toggle} />

      <style.NavMenu>
        {menuData.map((item, index) => (
          <style.NavMenuLinks to={item.link} key={index}>
            {item.title}
          </style.NavMenuLinks>
        ))}
      </style.NavMenu>

      <style.NavBtn>
        <Button content="Contate-Nos" primary={true} />
      </style.NavBtn>
    </style.Nav>
  );
}

export default Navbar;
