import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom"

import { Rootlayout } from './layout/Rootlayout';
import { CategoriesPage } from './pages/categories/CategoriesPage';
import { Home } from './pages/home/Home';
import { AccountPage } from './pages/account/AccountPage';


export const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={ <Rootlayout /> }>
      <Route index element={ <Home /> } />
      <Route path='categories' element={ <CategoriesPage /> } />
      <Route path='account' element={ <AccountPage /> } />
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}