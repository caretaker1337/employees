import React from "react";

import { Employees, Layout } from "~/components";
import { GlobalStyle, ThemeProvider, theme } from "~/theme";

const App: React.FC = () => (
  <ThemeProvider {...{ theme }}>
    <GlobalStyle />

    <Layout>
      <Employees />
    </Layout>
  </ThemeProvider>
);

export { App };
