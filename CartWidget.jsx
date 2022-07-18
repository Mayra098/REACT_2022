import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'




const CartWidget = () => {
  //la lógica va siempre antes del return
  return (
    <FontAwesomeIcon  icon={faCartShopping } inverse ></FontAwesomeIcon>

  );
};

export default CartWidget;
