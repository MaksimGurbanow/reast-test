import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./routes/main/Main";
import { StoreProvider } from "./redux/store";
import Details from "./routes/details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/products/:id",
    element: <Details />
  }
]);

function App() {
  return (
    <StoreProvider>
      <RouterProvider router={router}></RouterProvider>
    </StoreProvider>
  );
}

export default App;
