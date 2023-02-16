import "./App.css";
import InfoHeader from "./components/InfoHeader/InfoHeader";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Views/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
