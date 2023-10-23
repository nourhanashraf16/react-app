import React, { useState } from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Home } from './components/Home';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import { Shop } from './components/Shop';
import { DetailsProduct } from './components/DetailsProduct';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Counter } from './components/Counter/Counter';
const App = ()=> {


    return(
        <BrowserRouter>
             <div className='App'>
             <Header/>
             <Routes>
                 <Route path='/' element={<Home/>}/>
                 <Route path='/shop' element={<Shop/>}/>
                 <Route path='/shop/:id' element={<DetailsProduct/>}/>
                 <Route path='/counter' element={<Counter/>}/>
                 <Route path='/login' element={<Login/>}/>
                 <Route path='/register' element={<Register/>}/>
             </Routes>
            </div>
        </BrowserRouter>
)}


export default App