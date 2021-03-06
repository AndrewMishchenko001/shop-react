import styled from "styled-components";

export const ListItemContainer = styled.li`
  width: 100%;
  padding: 10px;
  .content {
    border-radius: 14px;
    border: 1px solid grey;
    padding: 10px;
    display: flex;
    flex-direction: column;
    height: 330px;
  }
  .listItemTitle {
    font-size: 16px;
    text-align: center;
  }
  .imageWrapper {
    height: 170px;
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
  .listItemImage {
    height: 100%;
  }
  .colorsList {
    display: flex;
    list-style: none;
  }
  .priceTitle {
    text-align: center;
    font-size: 20px;
  }
  .withSalePrice {
    text-decoration: line-through;
    color: #dc143c;
  }
  .withoutSalePrice {
    font-weight: 600;
    color: #819ff5;
    font-size: 30px;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 25%;
  }
`;
