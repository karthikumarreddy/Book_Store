import "./index.css";
import App from "./App.jsx";

import { ThemeProviderMulti } from "./Context/ThemeProviderMulti.jsx";
import { AppProvider } from "./Components/AppProvider.jsx";
import { createRoot } from "react-dom/client";
createRoot(document.getElementById("root")).render(
  <ThemeProviderMulti>
    <AppProvider>
      <App />
    </AppProvider>
  </ThemeProviderMulti>
);
