import "./App.css";
import InfoHeader from "./components/InfoHeader/InfoHeader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Views/Main";
import Menu from "./Views/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);

function App() {
  return (
    <>
      <InfoHeader />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
