import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router';
import MainHeader from './components/MainHeader/MainHeader';
import SoleCatchphrase from './components/SoleCatchphrase';
import Shoes from './components/Shoes/Shoes';
import Hero from './components/Hero/Hero';
import Header from './Header/Header';
import { fetchShoeData } from './store/shoe-slice';
import { useSelector, useDispatch } from 'react-redux';



function App() {
  const dispatch = useDispatch();
  const FIREBASE_DOMAIN = 'https://solecity-8f055-default-rtdb.firebaseio.com/'
  const shoes = useSelector(state=>state.shoe.shoe);
  console.log(shoes);

  useEffect(() => {
    dispatch(fetchShoeData())
  }, [dispatch])
  

  const uploadToFirebasee = async () => {
    await fetch(`${FIREBASE_DOMAIN}/shoes.json`, {
      method: 'PUT',
      body: JSON.stringify(shoes),
      headers: {
        'Content-Type' : 'application/json' 
      }
    })
  }

  return (
    <Fragment>
      <Header/>
      <Routes>
        <Route
        path='/'
        element={ <Navigate replace to="/home" /> }
        />
        <Route
        path='/home'
        element={
          <main>
            <SoleCatchphrase/>
            <Shoes/>  
          </main>
        }
        />
      </Routes>
    </Fragment>
  );
}


export default App;
