import React from 'react'

import { Route, Routes } from 'react-router'

import Home from '../pages/Home'
import Recipes from '../pages/Recipes'
import Settings from '../pages/Settings'

const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/recipes" element={<Recipes/>} />
            <Route path="/settings" element={<Settings/>} />    
        </Routes>
    )
}

export default routes;
