import React from "react";

import { TProps } from "./types";
import { StyledContent } from "./styled";

const Layout: React.FC<TProps> = ({ children }) => (
  <>
    Header
    <StyledContent>{children}</StyledContent>
  </>
);

export { Layout };
