import './App.css';
import Home from './components/Home/Home/Home';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Cart from './components/ShoppingCart/Cart/Cart';
import Navbar from './components/Home/Navbar/Navbar';
import Footer from './components/Home/Footer/Footer';
import { createContext, useState } from 'react';

export const UserContext = createContext()
export const CountContext = createContext()

function App() {

  const [cart, setCart] = useState([])
  const [count, setCount] = useState([])

  return (
    <UserContext.Provider value={[cart, setCart]}>
    <CountContext.Provider value={[count, setCount]}>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/cart">
              <Cart></Cart>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
    </CountContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
