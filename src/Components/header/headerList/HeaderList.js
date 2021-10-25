import React from "react";
import data from "../../../data";
import { HeaderNavigation } from "./HeaderListStyled";
const HeaderList = () => {
  return (
    <HeaderNavigation>
      <ul className="navigationList">
        {data.header.map((headerItem) => (
          <li key={headerItem} className="navigationListItem">
            <a href={`${headerItem}`} className="navigationListItemAnchor">
              {headerItem}
            </a>
          </li>
        ))}
      </ul>
    </HeaderNavigation>
  );
};
export default HeaderList;
