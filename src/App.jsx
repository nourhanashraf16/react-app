import React, { useState } from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Home } from './components/Home';
import { UserIngo } from './components/UserIngo';
import { About } from './components/About';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import { Shop } from './components/Shop';
import { DetailsProduct } from './components/DetailsProduct';
import StarRatings from "react-star-ratings";
import { Counter } from './components/Counter/Counter';
const App = ()=> {

 const [users , setUsers]=useState([
        {id:0 , name:"mai" , phone:"011"},
        {id:1 , name:"nour" , phone:"012"},
        {id:2 , name:"noha" , phone:"013"},
        {id:3 , name:"salma" , phone:"014"}]);
        const userList=users.map((user) => <UserIngo id={user.id} key={user.id} name={user.name} phone={user.phone}/> )
   
    return(
        <BrowserRouter>
             <div className='App'>
             <Header/>
             <Routes>
                 <Route path='/' element={<Home/>}/>
                 <Route path='/shop' element={<Shop/>}/>
                 <Route path='/about' element={<About/>}/>
                 <Route path='/users' element={<UserIngo />}/>
                 <Route path='/shop/:id' element={<DetailsProduct/>}/>
                 <Route path='/counter' element={<Counter/>}/>
             </Routes>
            </div>
        </BrowserRouter>
)}


export default App