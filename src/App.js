import React from 'react'
import Home from './Home'
import Orders from './Orders'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NotFound from './NotFound'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/orders' element={<Orders />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App