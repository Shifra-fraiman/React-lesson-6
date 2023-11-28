import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Customers } from './components/Customers.jsx';
import { Customer } from './components/Customer.jsx';
import { Main } from "./components/Main.jsx";
import { Statistics } from "./components/Statistics.jsx";
import{ Menu} from "./components/Menu.jsx";
import { UserContext } from './context/user.context.jsx';

const user = {name: 'shifra fraiman'}
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
    {
      path: '',
      Component: Menu,
      children:[
        {
          path: 'statistics',
          Component: Statistics,
        },
        {
          path: 'customers',
          Component: Customers,
        },
        {
          path: 'customers/:name',
          Component: Customer,
        }
      ]
    },
    
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <UserContext.Provider value={user}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  </React.StrictMode>,
  
)
