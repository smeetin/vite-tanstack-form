import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
import { ThemeProvider } from "./components/theme-provider";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error(
    "Root element not found. Make sure there is a <div id='root'></div> in your index.html"
  );
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ThemeProvider defaultTheme="system">
      <App />
    </ThemeProvider>
  </StrictMode>
);
