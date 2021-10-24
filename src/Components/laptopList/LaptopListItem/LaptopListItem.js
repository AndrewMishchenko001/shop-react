import React from "react";
import { ListItemContainer } from "./LaptopListItemStyled";

const LaptopListItem = ({ laptop }) => {
  return (
    <ListItemContainer>
      <div className="content">
        <h3 className="listItemTitle">{laptop.name}</h3>
        <img src={laptop.image} alt={laptop.name} className="listItemImage" />
        <p className="priceTitle">
          {laptop.isSale ? (
            <>
              <span className="withSalePrice">{laptop.price - 1000}</span>
              <span className="withoutSalePrice">{laptop.price}</span>
            </>
          ) : (
            <span className="withoutSalePrice">{laptop.price}</span>
          )}
          {" грн"}
        </p>
        <p>{laptop.description}</p>
      </div>
    </ListItemContainer>
  );
};

export default LaptopListItem;
