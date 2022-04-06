import React from 'react';
import { BsFillCartFill } from "react-icons/bs";
import s from './CardWidget.module.css';
function CardWidget() {
  return (
    <div>
        <BsFillCartFill className={s.colorIcon} size={30}/>
    </div>
  )
}

export default CardWidget