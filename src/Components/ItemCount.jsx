import React,{useState} from 'react';
import { Button } from 'react-bootstrap';
import s from './ItemCount.module.css';

function ItemCount({stock}) {
    const [count, setCount] = useState(0);

    function adding(){
        if(count < stock){
         setCount(count + 1);
        }
    }
    function subs(){
        if(count > 0)
        {
         setCount(count - 1);
        }
    }
    function onAdd() {
        alert(`You have added ${count} items to your cart`);
    }
  return (
    <div>
        <div className={s.styleBotons}>
         <Button onClick={adding} variant="success">+</Button>
         <p>{count}</p>
         <Button onClick={subs} variant="danger">-</Button>
         <Button onClick={onAdd} variant="primary">Comprar</Button>
         </div>
    </div>
  )
}

export default ItemCount