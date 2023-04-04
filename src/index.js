import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
// import WatchPage from "./components/WatchPage";
const WatchPage = lazy(() => import("./components/WatchPage"));
const Search = lazy(() => import("./components/Search"));

const root = ReactDOM.createRoot(document.getElementById("root"));

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: (
          <Suspense
            fallback={<div className="text-white text-3xl">Loading...</div>}
          >
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "/results",
        element: (
          <Suspense
            fallback={<div className="text-white text-3xl">Loading...</div>}
          >
            <Search />
          </Suspense>
        ),
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
