import React from "react";
import { SectionContainer } from "./SectionStyled";

const Section = ({ children, title }) => {
  return (
    <SectionContainer>
      <h2>{title.toUpperCase()}</h2>
      {children}
    </SectionContainer>
  );
};
export default Section;
