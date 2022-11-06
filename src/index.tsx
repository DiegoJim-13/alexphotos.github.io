import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./i18n";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import About from "./routes/about";
import Dogs from "./routes/dogs";
import HomePage from "./routes/homePage";
import Nature from "./routes/nature";
import Portfolio from "./routes/portfolio";
import Weddings from "./routes/weddings";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading...">
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/dogs" element={<Dogs />} />
            <Route path="/portfolio/nature" element={<Nature />} />
            <Route path="/portfolio/weddings" element={<Weddings />} />
          </Route>
        </Routes>
      </HashRouter>
    </React.Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
