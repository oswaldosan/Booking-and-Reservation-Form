import React, {createContext, useState, useEffect} from 'react';

export const DataContext = createContext();

export const DataProvider = ({children}) => {

    const packages = [
        {
         name: '2 noches 3 días Todo Incluido Premium con Ferry',
         img: '/ferrypremium.jpg',
         price: '$289',
        },
        {
         name: '2 noches 3 días Todo Incluido Premium con Ferry',
         img: '/flightpremium.jpg',
         price: '$429',
        },
        {
         name: '2 noches 3 días Todo Incluido Premium con Ferry',
         img: '/capremium.jpg',
         price: '$699',
        }        
     ]




    const initLocal = localStorage.getItem('cart');

    const [data, setData] = useState({
        dateArrival: '',
        dateDeparture: '',
        totalDays: '',
        name: '',
        email: ''
    })

    useEffect(()=>{

        if(initLocal) {
           let data = JSON.parse(initLocal)
            setData({
                dateArrival: data.dateArrival,
                dateDeparture: data.dateDeparture,
                totalDays: data.totalDays,
                name: data.name,
                email: data.email
              })
        } else {

        }
       
    }, [data])

    return (
        <DataContext.Provider value={{
            data,
            setData,
            packages
        }}>
            {children}
        </DataContext.Provider>


    )
}

