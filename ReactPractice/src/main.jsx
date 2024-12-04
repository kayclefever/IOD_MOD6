import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorMessage } from "./components/ErrorMessage/ErrorMessage.jsx";
import { ExplodingBomb } from "./components/ExplodingBomb/ExplodingBomb.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorMessage}>
      <App /> {/* can wrap App or other high-level parent components */}
    </ErrorBoundary>
  </StrictMode>
);
