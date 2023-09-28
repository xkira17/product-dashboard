import { extendTheme } from "@chakra-ui/react";

export const themeConfig = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: true,
  },
});
