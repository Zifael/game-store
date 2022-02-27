import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BasketPage from '../../Page/BasketPage/BasketPage'
import MainPage from '../../Page/MainPage/MainPage'
import OneGamePage from '../../Page/OneGamePage/OneGamePage'


const Routers = () => {
    return (        
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/game/:id'  element={<OneGamePage />} />
            <Route path='/basket' element={<BasketPage />} />
            <Route path='*' element={<h1>Error</h1>} />
        </Routes>       
    )
}

export default Routers