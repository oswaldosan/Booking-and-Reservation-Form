import React, {createContext, useState, useEffect} from 'react';

export const DataContext = createContext();

export const DataProvider = ({children}) => {

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
            setData
        }}>
            {children}
        </DataContext.Provider>


    )
}

