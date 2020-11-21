import React, {useState, useContext, useEffect} from 'react';
import './App.css';
import { DatePicker, message } from 'antd';
import { useForm } from "react-hook-form";
import { DataContext } from './context/Datacontext';
import Cart from './components/cart';
import moment from 'moment';


function App() {
  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }

  const { setData } = useContext(DataContext)
  const [date, setDate] = useState(null);
  const [dateOne, setDateOne] = useState(null);
  const [dateDepart, setDepart] = useState(null);
  const [totalDays, setDays] = useState(null);

  const dateFormat = 'YYYY/MM/DD';

  const handleChangeArrival = value => {
    console.log(moment(value, dateFormat))
 
   if(value) {
      setDate(moment(value, dateFormat).format('YYYY-MM-DD'))
      setDateOne(moment(value, dateFormat));
    }
      
  };

  const handleChangeDeparture = value => {

    const departureDate = moment(value)

    if(value) {
      setDepart(moment(value, dateFormat).format('YYYY-MM-DD'))
      const difference = dateOne.diff(departureDate, 'days') * -1
      setDays(difference)
  }

    
};


  const { register, handleSubmit, watch, errors } = useForm();

  function onSubmit (data) {
     setData({
      dateArrival: data.dateArrive,
      dateDeparture: data.dateDeparture,
      totalDays: totalDays,
      name: data.name,
      email: data.email
    })
  } 
  

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

       <DatePicker onChange={handleChangeArrival} disabledDate={disabledDate}></DatePicker> <br/>
       <DatePicker onChange={handleChangeDeparture} disabledDate={disabledDate}></DatePicker> <br/>
     
      <div style={hiddenDivs}>
       <input name="dateArrive" ref={register} defaultValue={date} placeholder="date field" />   <br/>
       <input name="dateDeparture" ref={register} defaultValue={dateDepart} placeholder="date field" />   <br/>
      </div>
      
       <input name="name" placeholder="NAMEE" ref={register} />   <br/>
      
       <input name="email" placeholder="EMAIL" ref={register({ required: true })} />   <br/>
       {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form>
     <br/><br/>
     <Cart></Cart>
    </div>
  );
}

export default App;


const hiddenDivs = {
  display: 'none',
  opacity: '0'
}
