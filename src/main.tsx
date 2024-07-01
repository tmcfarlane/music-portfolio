import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as StyletronProvider } from "styletron-react";
import { LightTheme, BaseProvider } from "baseui";
import { Client as Styletron } from "styletron-engine-atomic";
import App from "./App";
import "./index.css";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
const engine = new Styletron();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <App />
        <Analytics />
        <SpeedInsights />
      </BaseProvider>
    </StyletronProvider>
  </React.StrictMode>
);
