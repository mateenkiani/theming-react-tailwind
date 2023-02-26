import { ThemeContext } from "providers/theme";
import { useContext } from "react";

export const useTheme = () => {
  return useContext(ThemeContext);
};
