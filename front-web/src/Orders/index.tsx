
/**useEffect acessa o tempo de vida útil dos componentes */


import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import {Product} from './types';
import './styles.css';


function Orders() {

const [products, setProducts] = useState <Product[]> ([]);
  
    useEffect(()  => {
      fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error(error))  
    }, [] );
    
    return(
       <div className="orders-container">
           <StepsHeader/>
           <ProductsList products = {products}/>
       </div> 
    )
}
export default Orders;