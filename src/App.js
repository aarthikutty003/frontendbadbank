import logo from './logo.svg';
import './App.css';
import Home from './home.js';
import Navbar from './navbar.js';
import Create from'./create.js';
import Deposit from'./deposit.js';
import Withdraw from'./withdraw.js';
import Alldata from'./alldata.js';
import {HashRouter,Routes,Route}from'react-router-dom';
import userContext from './context.js';

export default function App(){
  
  return(<>
  <Navbar/>
  <userContext.Provider
   value={{'users':[{name:'xyz',email:'xyz@gmail.com',password:'123',amount:1000}]}}>
  <HashRouter>
  <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
    <Routes>
      <Route path="/create" element={<Create/>}></Route>
    </Routes>
    <Routes>
      <Route path="/deposit" element={<Deposit/>}></Route>
    </Routes>
    <Routes>
      <Route path="/withdraw" element={<Withdraw/>}></Route>
    </Routes>
    <Routes>
      <Route path="/alldata" element={<Alldata/>}></Route>
    </Routes>
  </HashRouter>
  </userContext.Provider>
</>
)
}