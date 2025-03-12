import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";

import { Grid } from "./components/grid/grid";
import { TopBar } from "./components/top-bar/top-bar";
import { SecondaryBar } from "./components/secondary-bar/secondary-bar";
import { StatusBar } from "./components/status-bar/status-bar";
import { Content } from "./components/content/content";
import { SurfaceVeryDark, SurfaceDark } from "./components/surface/very-dark";
import { Button } from "./components/button/button";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Grid>
      <TopBar />
      <SecondaryBar />
      <Content>
        <SurfaceVeryDark>
          <Button variant="primary" />
        </SurfaceVeryDark>
        <SurfaceDark>
          <Button variant="primary" />
        </SurfaceDark>
      </Content>
      <StatusBar />
    </Grid>
  </StrictMode>
);
