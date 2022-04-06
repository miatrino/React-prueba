import React from 'react';
import NavBar from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './Components/ItemListContainer';


export default function App() {
  return (
    <>
   <div>
     <NavBar/>
     <ItemListContainer/>
   </div>
    </>
  )
}

