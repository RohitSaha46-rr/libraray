import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './User';
import Sign from './Sign';
import Librarian from './Librarian';
import Home from './Home';
import {BrowserRouter,
Routes,
Route} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
  <Routes>
  <Route path="/libraray" element={<App/>}></Route>
  <Route path="/user" element={<User/>}></Route>
  <Route path="/sign" element={<Sign/>}></Route>
  <Route path="/librarian" element={<Librarian/>}></Route>
  <Route path="/home" element={<Home/>}></Route>
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
