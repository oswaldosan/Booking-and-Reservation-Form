import React, {useState, useContext, useEffect} from 'react';
import './App.css';
import { DataContext } from './context/Datacontext';
import Form from './components/form'
import Cart from './components/cart';
import TheCard from './components/card';
import PageHead from './components/pageHeader'


function App() {

  const {packages} = useContext(DataContext)
  const [paquetes, setPaquetes] = useState([])

  useEffect(()=>{
     
    setPaquetes(packages)

  },[])


  console.log(packages)

   return (
    <div>
      <PageHead></PageHead>
    
    <div className="tarjeta">
    {paquetes.map((pack, index) => (
    <TheCard key={index}
      packageName={pack.name}
      img={pack.img}
      price={pack.price}
    ></TheCard>
    ))}
     </div>

     <Cart></Cart>
    </div>
  );
}

export default App;

