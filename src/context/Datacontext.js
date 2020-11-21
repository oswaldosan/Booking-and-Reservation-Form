import React, {createContext, useState} from 'react';

export const DataContext = createContext();

export const DataProvider = ({children}) => {

    const [data, setData] = useState({
        dateArrival: '',
        dateDeparture: '',
        totalDays: '',
        name: '',
        email: ''
    })

    return (
        <DataContext.Provider value={{
            data,
            setData
        }}>
            {children}
        </DataContext.Provider>


    )
}

