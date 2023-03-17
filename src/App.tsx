import logo from "./logo.svg";
import "./App.css";
import ErrorBoundary from "./components/error/ErrorBoundary";
import { SettingsProvider } from "./components";
import { useState } from "react";
import Header from "./components/header/header";
import Page from "./components/page/page";

// Component
// State
// Props
// Context
// Lifecycles

function App() {
  const [theme, setTheme] = useState<Theme>("light");
  return (
    <div className="App">
      <ErrorBoundary>
        <SettingsProvider value={{ theme: theme, setTheme }}>
          <Header />
          <Page />
        </SettingsProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
