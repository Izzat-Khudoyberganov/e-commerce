import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import 'react-loading-skeleton/dist/skeleton.css'
import { Home, Info, Order, Products } from './pages';
import './App.css';

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/products",
      element: <Products/>
    },
    {
      path: '/products/:category',
      element: <Products/>
    },
    {
      path: "/info/:id",
      element: <Info/>
    },
    {
      path: "/orders",
      element: <Order/>
    }
  ])
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
