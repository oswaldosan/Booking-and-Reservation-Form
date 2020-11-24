import React, {useState, useContext} from 'react';
import { DatePicker, message } from 'antd';
import { useForm } from "react-hook-form";
import { DataContext } from '../context/Datacontext';
import moment from 'moment';

function Form() {
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
      
     const storeObject = {
      dateArrival: data.dateArrive,
      dateDeparture: data.dateDeparture,
      totalDays: totalDays,
      name: data.name,
      email: data.email
     }
     setData({
      dateArrival: data.dateArrive,
      dateDeparture: data.dateDeparture,
      totalDays: totalDays,
      name: data.name,
      email: data.email
    })
    localStorage.setItem('cart', JSON.stringify(storeObject));

    message.success('Data Added Succesfully');

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
    </div>
  );
}

export default Form;


const hiddenDivs = {
  display: 'none',
  opacity: '0'
}
