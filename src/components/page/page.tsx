import { useContext } from "react";
import { SettingsContext } from "../settings/SettingsProvider";

const Page = () => {
  const { theme } = useContext(SettingsContext);

  return <div className={theme}>PAGE</div>;
};

export default Page;
