import { createContext } from "react";

interface Settings {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const defaultSettings: Settings = {
  theme: "dark",
  setTheme: () => {}
};

export const SettingsContext = createContext<Settings>(defaultSettings);

interface SettingsProps {
  value: Settings;
  children?: React.ReactNode;
}

export const SettingsProvider: React.FC<SettingsProps> = ({
  value,
  children,
}) => (
  <SettingsContext.Provider value={value}>
    {children}
  </SettingsContext.Provider>
);
