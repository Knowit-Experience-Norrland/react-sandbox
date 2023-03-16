import { createContext } from "react";

interface Settings {
  theme: "light" | "dark";
}

const defaultSettings: Settings = {
  theme: "dark",
};

export const SettingsContext = createContext<Settings>(defaultSettings);

interface SettingsProps extends Settings {
  children?: React.ReactNode;
}

export const SettingsProvider: React.FC<SettingsProps> = ({
  theme,
  children,
}) => (
  <SettingsContext.Provider value={{ theme }}>
    {children}
  </SettingsContext.Provider>
);
