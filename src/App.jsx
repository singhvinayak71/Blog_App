import React from 'react'
import { Header } from './Components/Header'
import './App.css'
// import HomePage from './Pages/HomePage'
import CustomRoutes from './AllRoutes/CustumRoutes'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <CustomRoutes/>
    </div>
  );
}

export default App;