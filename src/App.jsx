import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Window1 from './componemts/Window1'
import Searchresult from './componemts/Searchresult'
import Final from './componemts/Final'
import Shoptab from './componemts/Shoptab'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Window1/>} path="/"/>
          <Route element={<Searchresult/>} path="/search"/>
          <Route element={<Final/>} path='/searchresult'/>
          <Route element={<Shoptab/>} path='/shoptab'/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
