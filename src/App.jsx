import { useContext,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Customers } from './components/Customers'
import { Outlet,Link } from 'react-router-dom'
import { Title } from './components/Title.jsx';
import { UserContext } from './context/user.context.jsx';
//import { CategoriesContext } from './context/categories.context'; 


function App() {
  const user = useContext(UserContext);
  return (
    <>
    <Title/>
    <h2>Hello to {user.name}</h2>
    <div>
      <Outlet/>
    </div>
    </>
  )
}

export default App
