import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./routes/main/Main";
import { StoreProvider } from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

function App() {
  return (
    <StoreProvider>
      <RouterProvider router={router}></RouterProvider>
    </StoreProvider>
  );
}

export default App;
