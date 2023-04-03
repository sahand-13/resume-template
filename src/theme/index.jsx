import React, { useMemo } from "react";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material";
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import componentsOverride from "./overrides";
import shadows, { customShadows } from "./shadows";

const ThemeProvider = ({ children }) => {
  const themeOptions = useMemo(
    () => ({
      palette: palette.light,
      typography,
      breakpoints,
      shape: { borderRadius: 8 },
      direction: "ltr",
      shadows: shadows.light,
      customShadows: customShadows.light,
    }),
    []
  );
  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
