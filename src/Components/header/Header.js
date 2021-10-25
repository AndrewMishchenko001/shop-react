import React from "react";
import HeaderList from "./headerList/HeaderList";
import { HeaderContainer } from "./HeaderStyled";
import sprite from "../../icons/header/symbol-defs.svg";

const Header = ({ data }) => {
  return (
    <HeaderContainer>
      <svg className="headerIcon">
        <use href={sprite + "#icon-home"} />
      </svg>
      {window.screen.width < 768 ? (
        <svg className="headerIcon">
          <use href={sprite + "#icon-menu"} />
        </svg>
      ) : (
        <HeaderList data={data} />
      )}
    </HeaderContainer>
  );
};
export default Header;
