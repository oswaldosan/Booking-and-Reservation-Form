import React, {useContext, useState} from 'react';
import { DataContext } from '../context/Datacontext';
import {ShoppingCartOutlined } from '@ant-design/icons'
import { motion } from "framer-motion"

const Cart = () => {
  
    const { data, setData } = useContext(DataContext)
    const [openCart, setOpen] = useState(false)

    function removeitem () {
        setData({})
        localStorage.removeItem('cart');
       
    }


    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }


      function handleClick () {
         setOpen(!openCart)
      }
      
    
    return (
        <div>
       
        <ShoppingCartOutlined style={{ fontSize: '36px', color: '#08c' }} onClick={handleClick} />
        {openCart &&   
         <motion.div
          initial="hidden"
          animate="visible"
          transition={{ duration: 1 }}
          variants={variants}
          >
            <h1>
                this is the Cart
            </h1>
            <p>Arrival Date: {data.dateArrival}</p>
            <p>Departure Date: {data.dateDeparture}</p>
            <p>Total Days: {data.totalDays}</p>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <button onClick={removeitem}>Remove item</button>
        </motion.div>
        }
            






        </div>



      );
}
 
export default Cart;