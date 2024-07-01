import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { Client as Styletron } from "styletron-engine-atomic";
import App from "./App";
import "./index.css";
import { injectSpeedInsights } from "@vercel/speed-insights";

const engine = new Styletron();

injectSpeedInsights();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <App />
      </BaseProvider>
    </StyletronProvider>
  </React.StrictMode>
);
