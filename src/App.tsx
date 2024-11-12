import { GetAllAccessories, AccessoryForm } from "./components";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layout";
import { Login } from "./Pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout />}>
        <Route index element={<Login />} />
        <Route path="/accessories" element={<GetAllAccessories />} />
        <Route path="/add" element={<AccessoryForm />} />{" "}
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
