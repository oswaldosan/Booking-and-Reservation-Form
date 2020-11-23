import React, {useContext} from 'react';
import { DataContext } from '../context/Datacontext';

const Cart = () => {
  
    const { data, setData } = useContext(DataContext)

    function removeitem () {
        setData({})
        localStorage.removeItem('cart');
       
    }

    return (
        <div>
            <h1>
                this is the Cart
            </h1>
            <p>Arrival Date: {data.dateArrival}</p>
            <p>Departure Date: {data.dateDeparture}</p>
            <p>Total Days: {data.totalDays}</p>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <button onClick={removeitem}>Remove item</button>
        </div>
      );
}
 
export default Cart;