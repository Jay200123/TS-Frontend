import { GetAllAccessories, AccessoryForm } from './components'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import MainLayout from './Layout'
import { Login } from './Pages'
import ProtectedRoute from './components/ProtectedRoutes'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Routes  */}
      <Route element={<MainLayout />}>
        <Route index element={<Login />} />

        {/* Private Routes  */}
        <Route element={<ProtectedRoute />}>
          <Route path='/accessories' element={<GetAllAccessories />} />
          <Route path='/add' element={<AccessoryForm />} />{' '}
        </Route>
      </Route>
    </>
  )
)

function App () {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
