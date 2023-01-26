
import { useReducer } from "react";
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/Navbar';
import { StateContext } from "./context";
import Basket from "./pages/basket/Basket";
import Home from './pages/home/Home';
import Users from './pages/users/Users';
import Weather from './pages/weather/Weather';
import { initialState, reducer } from "./reducer";

function App() {
  const [state, dispatch]=useReducer(reducer, initialState)
  console.log(state)
  return (
    <StateContext.Provider value={{state, dispatch}}>

    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/weather' element={<Weather/>}/>
        <Route path="/basket" element={<Basket/>}/>
      </Routes>
    </div>
    </StateContext.Provider>
  );
}

export default App;
