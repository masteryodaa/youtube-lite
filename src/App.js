import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watch from "./components/WatchPage";

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <Watch />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <Head />
      <RouterProvider router={appRouter}/>
    </Provider>
  );
};

// Head
// Body
//   Sidebar
//     Menuitems
//   MainContainer
//     Buttonlist
//     VideoContainer
//       VideoCard

export default App;
