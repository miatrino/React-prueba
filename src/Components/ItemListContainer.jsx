import React,{useEffect, useState} from 'react'
import customFetch from '../utils/customFetch'
import productos from '../utils/productos'
import ItemList from './ItemList';
function ItemListContainer() {
const [items,setItems] = useState([]);

useEffect(()=>{
  customFetch(3000,productos)
  .then(resultado =>setItems(resultado))
  .catch(error => console.log(error))
},[items])
  return (
    <div>
       <ItemList productos={items}/>
    </div>
  )
}

export default ItemListContainer